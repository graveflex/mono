import path from 'node:path';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const monoDir = path.resolve(__dirname, '../../web/src');

// TODO: Probably can get rid of this alias soon.
// Just added to test migrating to Vite for test integration:
const monoUiDir = path.resolve(__dirname, '../../../packages/ui/');

export default defineConfig({
  resolve: {
    alias: {
      '@mono/web': monoDir,
      '@mono/ui': monoUiDir
    }
  },
  plugins: [
    react(),
    storybookTest({
      configDir: path.join(__dirname, '.storybook'),
      storybookUrl: `http://127.0.0.1:${process.env.DOCS_PORT}`,
      storybookScript: 'pnpm dev:stories --ci'
    })
  ],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      name: 'chromium'
    },
    setupFiles: './.storybook/vitest.setup.ts'
  },
  optimizeDeps: {
    include: [
      '@radix-ui/react-avatar',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-slider',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-tabs',
      '@radix-ui/react-label',
      'embla-carousel-react',
      'react-resizable-panels',
      'react-day-picker',
      'next-themes',
      '@radix-ui/react-slot',
      'class-variance-authority',
      '@radix-ui/react-progress',
      '@radix-ui/react-select',
      'clsx',
      'tailwind-merge',
      '@radix-ui/react-dialog',
      '@radix-ui/react-switch',
      '@radix-ui/react-menubar',
      '@radix-ui/react-toast',
      '@radix-ui/react-checkbox',
      'sb-original/default-loader',
      'sb-original/image-context',
      'next/link',
      'lodash/isNull',
      'lodash/isNil',
      '@radix-ui/react-toggle',
      'vaul',
      '@radix-ui/react-separator',
      '@radix-ui/react-accordion',
      '@radix-ui/react-popover',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-context-menu'
    ]
  }
});
