# Block Building Guide

Follow these steps to build a new block for the CMS.

In this example, we're going to call the block `ExampleBlock`.

### 1. Directory structure

Create a new folder in the `/apps/web/src/blocks` directory called `ExampleBlock`.

When we're done we should have the following files in place:

- `ExampleBlock.config.ts` - the schema configuration for Payload
- `index.tsx` - the front-end component
- `ExampleBlock.mock.ts` - mock data used in storybook and in the seed script
- `ExampleBlock.seed.ts` - the seed script used to generate test data for development and Q/A
- `ExampleBlock.stories.tsx` - the storybook entry + UI tests for the front-end component

### 2. Schema

First look at the Figma design to identify which fields need to be dynamic.

[Here](https://payloadcms.com/docs/fields/overview) is a link to the Payload documentation on data types.

For our example, let's say that the `ExampleBlock` has a title and description.

Given these requirements, the `config` file should look as follows:

```tsx
// apps/web/src/blocks/ExampleBlock/ExampleBlock.config.ts
import BlockConfig from "@mono/web/payload/fields/BlockConfig";
import type { Block } from "payload";

const FaqNestedBlock = (prefix: string): Block => ({
  slug: "exampleBlock",
  interfaceName: "ExampleBlock",
  dbName: `${prefix}FaqNestedBlock`,
  fields: [
    BlockConfig(),
    {
      name: "title",
      label: "Title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      localized: true,
      required: true,
    },
  ],
});

export default FaqNestedBlock;
```

**Note:** the `BlockConfig` function is a re-usable set of fields that contain commonly used block settings (i.e. padding, content-width, theme, etc.).

Additionally, we'll need to add this block to payload's block list. To do this, edit the `/apps/web/src/lib/blockList.ts` file as follows:

```ts
// apps/web/src/lib/blockList.ts
// other imports...
import ExampleBlock from "@mono/web/blocks/ExampleBlock/ExampleBlock.config";

export const allBlocks = (prefix: string) => [
  // ... other existing blocks
  ExampleBlock(prefix),
];
```

**Note:** the `prefix` is used to improve database table name generation. In some cases payload uses field names that are too long by default, and this is used to shorten them.

Now run the migrations. This is done in two steps:

1. Run `pnpm db`, then select `Create a new Migration`. This will create a new automatic migration in the `/apps/web/src/migrations` directory.
2. Run `pnpm db`, then select `Run pending migrations`, then select `My local database`. This will apply the migrations from the last step to your local database.

**Note:** The `pnpm db` script contains several useful shortcuts to payload's migration system. Read more about payload's migration system [here](https://payloadcms.com/docs/database/migrations).

### 3. The Component

The component is used to render the block content to the browser. Let's create a minimal example component.

```tsx
// apps/web/src/blocks/ExampleBlock/index.tsx
// Types are automatically generated from the schema by Payload
import type { ExampleBlock } from "@mono/types/payload-types";

// The Wrapper component is corollary to the BlockConfig settings
import Wrapper from "@mono/web/components/Wrapper";

// The RichText component is used to render lexical rich text data
import RichText from "@mono/web/components/RichText/index";

function ExampleBlock({ description, title, wrapper }: BannersBlockType) {
  const VariantComponent = Variants[variant];

  return (
    <Wrapper {...wrapper}>
      <h2>{title}</h2>
      <div>
        <Richtext data={description} />
      </div>
    </Wrapper>
  );
}

export default BannersBlock;
```

Now add a dynamic import for this component to the `BlocksRenderer` component in `/apps/web/src/components/BlocksRenderer/index.tsx`. The import should look like this:

```tsx
import type { Page } from '@mono/types/payload-types';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import React from 'react';

const defaultOpts = {
  suspense: true,
  ssr: true
};

const blockList = {
  // ... other blocks
  exampleBlock: dynamic(() => import('@mono/web/blocks/ExampleBlock'), {
    ...defaultOpts
  })
}

// rest of the file

```

That's it! We now have a working block that should be visible from the Payload admin view.

### 4. Mock data

The easiest way to generate mock data is to enter the content from Figma into the Payload admin and then copy the generated API response.

To do this:

1. Navigate to the payload admin, usually at [http://localhost:3000/admin](http://localhost:3000/admin).
2. Navigate to the `Pages` collection and create a new page instance.
3. Give the page a title and click `Publish`.
4. Navigate to the `Live Preview` -> `Page Content` tab and click `Add Block`.
5. Add content to match the Figma design and click `Publish Changes`.
6. Navigate to the `API` tab and copy the `block` content into a file called `ExampleBlock.mock.ts`.

The file should look something like this:

```ts
// apps/web/blocks/ExampleBlock/ExampleBlock.mock.ts

import type { ExampleBlock } from "@mono/types/payload-types";

export const data: ExampleBlock = {
  title: "Lorem ipsum",
  description: {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,

      children: [
        {
          type: "paragraph",
          format: "",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Maecenas non viverra tortor, quis volutpat nulla. Nam posuere, odio at porta volutpat, ante massa iaculis velit, non suscipit lacus arcu in arcu",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textStyle: "",
          textFormat: 0,
        },
      ],
      direction: "ltr",
    },
  },
};
```

### 5. Storybook

Now let's create a storybook entry for our block using the mock data we just generated.

Create a new file at `/apps/web/src/blocks/ExampleBlock/ExampleBlock.stories.tsx` with the following content:

```tsx
// apps/web/src/blocks/ExampleBlock/ExampleBlock.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import type { ExampleBlock as ExampleBlockProps } from "@mono/web/payload-types";
import ExampleBlock from ".";
import { data } from "./ExampleBlock.mock";

const meta: Meta<ExampleBlock> = {
  title: "blocks/ExampleBlock",
  component: ExampleBlock,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<ExampleBlockProps>;

export const Default: Story = {
  args: {
    ...data,
  },
};
```

Now open Storybook at [http://localhost:3001](http://localhost:3001) and you should be able to find the new block in the list.

### 6. Seeds

Often times when developing an app, the database needs to be reset and all of the content has to be re-entered manually. This takes a ton of time and can lead to problems being overlooked if not not kept up-to-date.

To help this problem, this app has a seed script that populates the CMS with test data.

To create a seed for this block, create a new file at `/apps/web/src/blocks/ExampleBlock/ExampleBlock.seed.ts` and add the following contents:

```ts
import type { ExampleBlock } from "@mono/types/payload-types";
import { BlockSeed } from "@mono/web/lib/seed/block";
import { data } from "./ExampleBlock.mock";

export const Seed = new BlockSeed<ExampleBlock>({
  blockType: "exampleBlock",
  variantCount: 1,
  dependencies: [],
  generateContent: async (_payload, _variant) => {
    return Promise.resolve([data]);
  },
  generatePageName: function (data: ExampleBlock) {
    return `${this.blockName} | ${data.title}`;
  },
});
```

Now you should be able to run `pnpm db`, select `Re-seed a database`, then `My local database`. Once the script runs, a new page will have been created with the block and populated with mock data from the seed file.

**Note:** the `Re-seed` command will wipe out any existing content in your database, so be careful!

### 7. Clean-up

Assuming everything is working correctly, it's time to submit a PR for this block.

This repo has several automated checks for things like linting, type safety, and unit tests.

It's best to run the checks locally and make any fixes before submitting the PR.

To do this:

1. Run `pnpm lint:fix` to auto-correct any linting issues. Manually correct any linting issues that weren't fixed automatically.
2. Run `pnpm cicd` to test for linting issues, type issues, and to make sure all of the tests pass. Resolve any issues that are found and repeat this process until it passes.

Once everything looks good, push the branch to GitHub and open a new PR.

### 8. Q/A

GitHub will automatically deploy a new isolated instance of this site for every open PR. Once the site has finished building, the GitHub action will leave a comment on the PR with a link to the PR deploy instance.

To populate the new PR deploy with seed data, run `pnpm db` -> `Re-seed a database` -> `The neon database for my current PR branch`.

Navigate to any new pages and Q/A as necessary. Make sure to run lighthouse and correct any issues that it reports.

### 9. Merging

Once everything has passed Q/A, `Squash Merge` the PR into the `development` branch.

This will trigger a new build on the `development` staging site.

At this point you can run `pnpm db` -> `Re-seed a database` -> `The remote development DB` to populate the `development` staging site with the new seed data.

