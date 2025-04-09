import path from 'path';
import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const nextConfigPath = path.resolve(__dirname, '../next.config.mjs');

const config: StorybookConfig = {
  stories: [
    '../../../packages/ui/**/*.stories.tsx',
    '../../../apps/web/**/*.stories.tsx',
    '../../../apps/web/**/**/*.stories.tsx'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: []
      }
    },
    '@storybook/experimental-addon-test',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {
      nextConfigPath
    }
  },
  features: {
    experimentalRSC: true
  },
  docs: {
    autodocs: true
  },
  staticDirs: [],
  viteFinal: async (c) => {
    const monoDir = path.resolve(__dirname, '../../web/src');

    // TODO: Probably can get rid of this alias soon.
    // Just added to test migrating to Vite for test integration:
    const monoUiDir = path.resolve(__dirname, '../../../packages/ui/');
    if (c?.resolve?.alias) {
      // eslint-disable-next-line
      c.resolve.alias = {
        ...(c.resolve.alias ?? {}),
        '@mono/web': monoDir,
        '@mono/ui': monoUiDir
      };
    }

    return c;
  }
};
export default config;
