import type { Preview } from '@storybook/react';
import '../../web/src/app/global.css';
import { withThemeByClassName } from '@storybook/addon-themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },

  // necessary for react 19
  reactOptions: {
    legacyRootApi: false,
    strictMode: false
  }
};

const preview: Preview = {
  parameters,
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light'
    }),
    (Story, ctx) => {
      return <Story />;
    }
  ]
};

export default preview;
