import cliProgress from 'cli-progress';
import { readdirSync } from 'fs';
import { join } from 'path';
import { AssetSeed } from '@mono/web/lib/seed/asset';
import { BlockSeed, type Dependency } from '@mono/web/lib/seed/block';

const baseDir = join(__dirname, '..');

type Seed = AssetSeed | BlockSeed;

async function importSeedFiles() {
  const files = readdirSync(baseDir, { recursive: true });
  const seedClasses: (AssetSeed | BlockSeed)[] = [];

  for (const file of files) {
    if (typeof file === 'string') {
      const filePath = join(baseDir, file);
      if (file.endsWith('.seed.ts')) {
        const seedImport = await import(filePath);
        if (
          seedImport.Seed instanceof AssetSeed ||
          seedImport.Seed instanceof BlockSeed
        ) {
          seedClasses.push(seedImport.Seed);
        }
      }
    }
  }

  return seedClasses;
}

function sortByDependencies(seeds: Seed[]) {
  const sorted: Seed[] = [];
  const visited = new Set<Dependency>();
  const visiting = new Set<Dependency>();

  const seedMap = new Map(seeds.map((seed) => [seed.name as Dependency, seed]));

  function visit(seed: Seed) {
    if (visited.has(seed.name as Dependency)) {
      return;
    }

    for (const dep of seed.dependencies) {
      const depSeed = seedMap.get(dep);
      if (!depSeed) {
        throw new Error(`Dependency ${dep} not found for seed ${seed.name}`);
      }
      visit(depSeed);
    }

    visiting.delete(seed.name as Dependency);
    visited.add(seed.name as Dependency);
    sorted.push(seed);
  }

  for (const seed of seeds) {
    visit(seed);
  }

  return sorted;
}

async function seed() {
  const multiBar = new cliProgress.MultiBar({
    clearOnComplete: false,
    format: ' {bar} | {seedName} | {value}/{total}'
  }, cliProgress.Presets.shades_classic);
  const seeds = await importSeedFiles();
  const sortedSeeds = sortByDependencies(seeds);

  for (const seed of sortedSeeds) {
    await seed.prepareData();
    const pb = multiBar.create(seed.data.length, 0, { seedName: seed.name });
    await seed.saveSeeds(() => pb.increment());
  }

  multiBar.stop();
  process.exit(0);
}

seed();
