import { execSync, spawn } from 'child_process';
import os from 'os';
import path from 'path';
import util from 'util';
import { confirm, search, select } from '@inquirer/prompts';
import { createApiClient } from '@neondatabase/api-client';
import { oraPromise } from 'ora';

interface Step2Props {
  gitBranch: string;
  prId: string;
  neonBranchName: string;
}

const exec = util.promisify(require('child_process').exec);

const apiClient = createApiClient({
  apiKey: process.env.NEON_API_KEY as string
});

async function getCurrentGitBranch() {
  const { stdout: branchName } = await exec('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8'
  });
  return branchName.trim();
}

async function getCurrentPRId(branchName: string) {
  const repo = process.env.GITHUB_REPO as string; // e.g., 'owner/repo'
  const token = process.env.GITHUB_TOKEN as string; // GitHub token with repo access

  if (/^(development|staging|main)$/.test(branchName)) {
    return null;
  }

  const response = await fetch(
    `https://api.github.com/repos/${repo}/pulls?head=${repo.split('/')[0]}:${branchName}`,
    {
      headers: {
        Authorization: `token ${token}`,
        Accept: 'application/vnd.github.v3+json'
      }
    }
  );

  const pulls = await response.json();
  if (pulls.length === 0) {
    return 0;
  }

  return pulls[0].number; // Assuming the first PR is the current one
}

// should follow same convention as github migration workflow
function getCurrentNeonBranchName(branchName: string, prId: string) {
  if (/^(development|staging|main)$/.test(branchName)) {
    return branchName;
  }

  return `preview/pr-${prId}-${branchName}`;
}

async function cleanMigrationDir() {
  const migrationDir = path.resolve(__dirname, '../src/migrations');
  const cleanProcess = spawn('rm', ['-rf', migrationDir], {
    stdio: 'inherit'
  });

  await new Promise<void>((resolve, reject) => {
    cleanProcess.on('close', (code: number) => {
      if (code !== 0) {
        reject(new Error(`Migration process exited with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}

async function createMigration() {
  const migrateProcess = spawn('payload', ['migrate:create'], {
    stdio: 'inherit'
  });

  await new Promise<void>((resolve, reject) => {
    migrateProcess.on('close', (code: number) => {
      if (code !== 0) {
        reject(new Error(`Migration process exited with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}

async function reset() {
  await cleanMigrationDir();
  await createMigration();
  return runFreshMigration({ uri: process.env.DATABASE_URL as string });
}

async function createNeonBranch(projectId: string, neonBranch: string) {
  const resp = await apiClient.createProjectBranch(projectId, {
    branch: { name: neonBranch }
  });
  const branch = resp.data.branch;

  if (!branch) {
    throw new Error(`Unable to create neon branch "${neonBranch}"`);
  }

  return resp.data.branch;
}

async function getNeonConnectionUrl(neonBranch: string) {
  const projectId = process.env.NEON_PROJECT_ID as string;
  const branches = await apiClient.listProjectBranches({ projectId });
  let branchData = branches.data.branches.find((b) => b.name === neonBranch);

  if (!branchData) {
    // TODO: create the branch if it doesn't exist
    // throw new Error(`No Neon branch found with name ${neonBranch}`);
    branchData = await oraPromise(createNeonBranch(projectId, neonBranch), {
      text: `No database found for neon branch "${neonBranch}". Creating...`
    });
  }

  const response = await oraPromise(
    apiClient.getConnectionUri({
      projectId,
      role_name: 'neondb_owner',
      branch_id: branchData.id,
      database_name: 'neondb'
    }),
    {
      text: `Fetching connection URI for neon branch "${neonBranch}"`
    }
  );

  return {
    targetName: `Neon branch "${neonBranch}"`,
    neonBranch,
    uri: response.data.uri
  };
}

async function getAnotherNeonPRConnectionUrl() {
  const projectId = process.env.NEON_PROJECT_ID as string;
  const neonBranchList = await apiClient.listProjectBranches({ projectId });
  const neonBranchName = await search({
    message: 'Select a Neon branch (type to narrow down the list)',
    source: async (input) => {
      return neonBranchList.data.branches
        .filter((branch) => (input ? branch.name.includes(input) : true))
        .map((branch) => ({
          name: branch.name,
          value: branch.name
        }));
    }
  });

  return getNeonConnectionUrl(neonBranchName);
}

async function getDatabaseUrl(props: Step2Props, message: string) {
  // 1. check if local, dev, staging, prod, or PR
  const targetBranch = await select({
    message,
    choices: [
      {
        name: 'My local database',
        value: 'local',
        description:
          'This corresponds to the value of your DATABASE_URL ENV var'
      },
      {
        name: `The neon database for my current PR branch`,
        value: 'currentPR',
        description: `The current Neon branch for this PR is "${props.neonBranchName}"`
      },
      {
        name: 'The remote development DB',
        value: 'development',
        description: `The Neon branch for this PR is "development"`
      },
      {
        name: 'The remote staging DB',
        value: 'staging',
        description: `The Neon branch for this PR is "staging"`
      },
      {
        name: 'The remote production DB',
        value: 'main',
        description: `The Neon branch for this PR is "main"`
      },
      {
        name: 'A neon database for a different PR branch',
        value: 'otherPR',
        description: `You will be prompted to select from a list of Neon branches`
      }
    ]
  });

  switch (targetBranch) {
    case 'local':
      return {
        targetName: 'This machine (localhost)',
        neonBranch: 'localhost',
        uri: process.env.DATABASE_URL as string
      };
    case 'currentPR':
      return getNeonConnectionUrl(props.neonBranchName);
    case 'development':
    case 'staging':
    case 'main':
      return getNeonConnectionUrl(targetBranch);
    case 'otherPR':
      return getAnotherNeonPRConnectionUrl();
  }
}

async function runMigrations(props: Step2Props) {
  const db = await getDatabaseUrl(props, 'Retrieving database connection URI');

  if (!db) {
    throw new Error('Unable to find database');
  }

  const proceed = await confirm({
    message: `You're about to run the migrations from your local codebase on the following database URI:\n
      Target: ${db.targetName}\n
      URI: ${db.uri}\n
      Does this look correct?`
  });

  if (proceed) {
    const migrateProcess = spawn('payload', ['migrate'], {
      stdio: 'inherit',
      env: {
        ...process.env,
        DATABASE_URL: db.uri
      }
    });

    return new Promise<void>((resolve, reject) => {
      migrateProcess.on('close', (code: number) => {
        if (code !== 0) {
          reject(new Error(`Migration process exited with code ${code}`));
        } else {
          resolve();
        }
      });
    });
  }

  console.info('Migration cancelled.');
}

async function runFreshMigration(db: { uri: string }) {
  const migrateProcess = spawn('sh', ['-c', 'yes | payload migrate:fresh'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: db.uri
    }
  });

  return new Promise<void>((resolve, reject) => {
    migrateProcess.on('close', (code: number) => {
      if (code !== 0) {
        reject(new Error(`Migration process exited with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}

/*
async function seedAll(db: { uri: string }) {
  const seedProcess = spawn('pnpm', ['seed:all'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: db.uri
    }
  });

  return new Promise<void>((resolve, reject) => {
    seedProcess.on('close', (code: number) => {
      if (code !== 0) {
        reject(new Error(`Seed process exited with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}
*/

async function issueDireWarning() {
  const username = os.userInfo().username;
  const accept = await confirm({
    message: `WARNING\n
      ${username}, ${username}, ${username}.\n
      You're about to destroy production database.\n
      TAKE A SECOND TO THINK ABOUT THIS.\n
      Do you, ${username}, actually want to DESTROY THE PRODUCTION DATABASE?`
  });

  if (!accept) {
    throw new Error('Operation aborted.');
  }
}

async function reseed(props: Step2Props) {
  const db = await getDatabaseUrl(
    props,
    'Select the database that you want to re-seed.'
  );

  if (!db) {
    throw new Error('Unable to find database');
  }

  if (db.neonBranch === 'main') {
    await issueDireWarning();
  }

  const proceed = await confirm({
    message: `You're about to OBLITERATE the following database:\n
      Target: ${db.targetName}\n
      URI: ${db.uri}\n
      Are you sure you want to proceed?`
  });

  if (proceed) {
    await runFreshMigration(db);
    return;
    // TODO: re-implement seeds
    // return seedAll(db);
  }

  console.info('Re-seed cancelled.');
}

async function runDbSync(sourceDb: { uri: string }, destDb: { uri: string }) {
  const syncProcess = spawn('sh', ['./bin/copy_db.sh'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      SOURCE_DATABASE_URL: sourceDb.uri,
      DESTINATION_DATABASE_URL: destDb.uri
    }
  });

  return new Promise<void>((resolve, reject) => {
    syncProcess.on('close', (code: number) => {
      if (code !== 0) {
        reject(new Error(`Seed process exited with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}

async function openDb(props: Step2Props) {
  const db = await getDatabaseUrl(
    props,
    'Select the database that you want to open.'
  );

  if (!db) {
    throw new Error("Can't find database");
  }

  return exec(`open ${db.uri}`, { stdio: 'inherit' });
}

async function sync(props: Step2Props) {
  const sourceDb = await getDatabaseUrl(
    props,
    'Select the source database that you want copy data from.'
  );

  // TODO: support remote database dest
  const destDb = {
    uri: process.env.DATABASE_URL as string,
    targetName: 'This machine (localhost)',
    neonBranch: 'localhost'
  };

  if (!sourceDb) {
    throw new Error('Unable to find source database');
  }

  if (!destDb) {
    throw new Error('Unable to find destination database');
  }

  if (destDb.neonBranch === 'main') {
    await issueDireWarning();
  }

  const proceed = await confirm({
    message: `You're about to OBLITERATE the following database:\n
      Destination Target: ${destDb.targetName}\n
      Destination URI: ${destDb.uri}\n

      The Destination database contents will be replaced with:\n
      Source Target: ${sourceDb.targetName}\n
      Source URI: ${sourceDb.uri}\n

      Are you sure you want to proceed?`
  });

  if (proceed) {
    return runDbSync(sourceDb, destDb);
  }
}

async function run(): Promise<void> {
  // confirm you're on the correct git branch
  const gitBranch = await oraPromise(getCurrentGitBranch(), {
    text: 'Reading branch name'
  });

  const prId = await oraPromise(getCurrentPRId(gitBranch), {
    text: 'Fetching PR ID'
  });

  const neonBranchName = getCurrentNeonBranchName(gitBranch, prId);

  const branchContextMessage = `You're working from the following context:\n`;

  const step2Props = {
    gitBranch,
    prId,
    neonBranchName
  };

  console.info(branchContextMessage);
  console.table(step2Props);

  const nextStep = await select({
    message: 'What would you like to do?',
    choices: [
      {
        name: 'Create a new migration',
        value: 'createMigration',
        description:
          'Create (but do not run) a new migration file in the apps/web/src/migrations dir.'
      },
      {
        name: 'Run pending migrations',
        value: 'runMigrations',
        description:
          'Run any migrations that have not been applied to the target database.'
      },
      {
        name: 'Open a database',
        value: 'open',
        description:
          'Open a database using tableplus (or whatever your default DB client is).'
      },
      {
        name: 'Sync one database to another',
        value: 'sync',
        description: 'Copy the entire contents of one database to another'
      },
      {
        name: 'Re-seed a database',
        value: 'reseed',
        description:
          'Delete all contents of a database and re-seed from scratch'
      },
      {
        name: 'Reset migrations',
        value: 'reset',
        description: 'Flatten all migrations into a single migration.'
      }
    ]
  });

  switch (nextStep) {
    case 'open':
      return openDb({ prId, gitBranch, neonBranchName });
    case 'createMigration':
      return createMigration();
    case 'runMigrations':
      return runMigrations({ prId, gitBranch, neonBranchName });
    case 'sync':
      return sync({ prId, gitBranch, neonBranchName });
    case 'reseed':
      return reseed({ prId, gitBranch, neonBranchName });
    case 'reset':
      return reset();
  }
}

run();
