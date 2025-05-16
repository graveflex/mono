# NextJS + PayloadCMS Monorepo

## Getting Started

### MacOS

Make sure to install the latest versions of Node and PostgreSQL:

* [node](https://nodejs.org/) - use a node version manager like [mise](https://mise.jdx.dev/)
  * `curl https://mise.run | sh`
  * `mise use -g node@20`
  * `corepack enable pnpm`
* [PostgreSQL](https://www.postgresql.org/download/macosx/) - use [homebrew](https://brew.sh/) to install
  * `brew install postgresql`

---

1. Install dependencies: `pnpm install`
2. Create the PostgreSQL database:
  - The default database name is `monorepo`. This can be changed by updating `DATABASE_URL` in the `.env` file.
  - Run `createdb monorepo` (or whatever the database name is).
  - Run `pnpm db`, select `Re-seed a database`, then `My local database`
3. Start the dev server: `pnpm dev`

### OR use Docker

Make sure to install [Docker desktop](https://www.docker.com/products/docker-desktop/).

1. Run `docker-compose up web` to build and start the dev server.
2. Run `docker-compose run --rm web pnpm db`, select `Re-seed a database`, then `My local database`.

---

The Next.js app should now be running on [http://localhost:3000](http://localhost:3000), and storybook on [http://localhost:3001](http://localhost:3001).

You can start editing the page by modifying `apps/web/src/app/(app)/[locale]/page.tsx`. The page auto-updates as you edit the file.

## Helpful Scripts

* `pnpm cicd`: runs the following scripts in parallel:
  * `pnpm lint`: checks all apps and packages for linting errors
  * `pnpm types`: checks all apps and packages for type errors
  * `pnpm test`: runs the test suite for each app and package using [vitest](https://vitest.dev/)
* `pnpm db`: opens an interactive CLI for managing the database. You can use this to create, drop, and seed the database, and to sync the database with remote environments (i.e. prod, staging, PR deploys).
* `pnpm create:block`: scaffolds a new block template (schema, component, seeds, and storybook entry)
* `pnpm create:component`: scaffolds a new component for the UI library with a storybook entry
- `pnpm clean` cleans out all build/dist directories and node_modules
- `pnpm generate:types` regenerates the PayloadCMS types from the schema if they somehow get out of sync

## Learn More

To learn more about this stack, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) - an interactive Next.js tutorial.
* [Turborepo](https://turborepo.com/) - a monorepo build system. It allows you to develop and build your apps and packages in parallel, and share code between them.
* [Payload](https://payloadcms.com/) - a headless CMS. It allows you to manage your content and data in a flexible and powerful way.
* [TailwindCSS](https://tailwindcss.com/) - a utility-first CSS framework. It allows you to style your components and pages in a fast and efficient way.
* [Shadcn/ui](https://ui.shadcn.com/) - a component library. It allows you to use pre-built components and styles in your app.
* [Neon](https://neon.tech/) - a serverless Postgres database. It allows you to use a fully managed and scalable database in your app.
* [biome.js](https://biomejs.dev/) - a code formatter and linter. It allows you to format and lint your code in a consistent and efficient way.
* [Storybook](https://storybook.js.org/) - a UI component explorer. It allows you to develop and test your components in isolation.

## Deployment

Deployments are managed via Github actions.

The `main`, `staging` and `development` branches are used for mainline deployments. When pushing to these branches, the following actions are taken by the github CI:

1. Code is checked for linting / formatting errors with [biome.js](https://biomejs.dev/).
2. The test suite is run using [storybook](https://storybook.js.org/) and [vitest](https://vitest.dev/).
3. Migrations are run on the corresponding [neon](https://neon.tech) database branch.
4. The next.js app is compiled and deployed to [vercel](https://vercel.com).

For branches with open PRs, the following additional actions are taken:

1. A [storybook](https://storybook.js.org/) deployment is created for the PR, allowing you to view and test the components in isolation.
2. The PR deploy is checked with [lighthouse](https://developers.google.com/web/tools/lighthouse) for performance, accessibility, SEO, etc.
3. The results and links to the relevant apps (storybook, PR deploy, neon DB branch) are posted to the PR as a comment.

## CI Setup

#### Neon
1. Create a new project in [Neon](https://neon.tech).
2. Create a `Neon API Key` for the project and **SAVE IT**. You cannot view again after it's been created.
3. Find the Neon project ID and **WRITE IT DOWN**.
3. From the Neon project dashboard, Add Compute
  * Set Compute Type to `primary`
  * Set Compute Size to `Efficient`

#### Vercel
1. Create a new project in [Vercel](https://vercel.com).
  * Find the org name and **WRITE IT DOWN**.
  * Find the org ID and **WRITE IT DOWN**.
  * Find the project ID and **WRITE IT DOWN**.
  * Find the project name and **WRITE IT DOWN**.
  * Do **NOT** connect via github
2. Add the `DOTENV_PRIVATE_KEY` as an ENV var
3. Create a new org-level project token from `Account Settings` > `Tokens` and **SAVE IT**.
4. Create a new `Blob Storage` instance
  * The keys will be added automatically to the `Vercel` project. Navigate to the env vars tab and **WRITE THEM DOWN**.

#### Github

Add the following Github Secrets to the repo:

* `NEON_DATABASE_USERNAME` - set to `neondb_owner`
* `NEON_API_KEY` - set to the value from Neon step 2
* `VERCEL_ORG_ID` - set to the value from Vercel step 1
* `VERCEL_PROJECT_ID` - set to the value from Vercel step 1
* `VERCEL_ORG_ID` - set to the value from Vercel step 1
* `VERCEL_TOKEN` - set to the value from Vercel step 3
* `TURBO_TOKEN` - (optional) should be the same as the `VERCEL_TOKEN`

Add the following Variables to the repo:

* `NEON_PROJECT_ID` - set to the value from Neon step 3
* `VERCEL_ORG` - set to the value from Vercel step 1
* `TURBO_TEAM` - usually the same as `VERCEL_ORG` (or whatever the team name is)
* `VERCEL_PROJECT_NAME` - set to the value from Vercel step 1

#### Codebase

Add the following secrets to the `Github` repo using [dotenvx](https://dotenvx.com/):

* `dotenvx set BLOB_READ_WRITE_TOKEN [vercel blob storage key]`
* `dotenvx set NEON_PROJECT_ID [neon project id]`
* `dotenvx set GITHUB TOKEN [github token]`

Update the following values in the `.env` file:

* `PROJECT_NAME` - choose a unique name suitable for the project
* `DATABASE_URL` - choose a database name that makes sense for the project
* `GITHUB_REPO` - the path to the project as it exists in github

### Testing CI setup

Create branches for `main`, `staging`, and `development`. These should all result in new builds in Vercel.

Open a PR against `development` and make a minor change. This should result in a new Vercel instance for the PR.
