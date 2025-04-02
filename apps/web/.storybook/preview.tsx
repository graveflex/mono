import type { Preview } from '@storybook/react';
import '../../web/src/app/global.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { libreCaslonText, manrope } from './../src/app/fonts';

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
        dark: 'dark',
        wheat: 'wheat'
      },
      defaultTheme: 'light'
    }),
    (Story) => {
      const htmlEl = document.getElementsByTagName('html')?.[0];
      htmlEl.classList.add(
        `${libreCaslonText.variable}`,
        `${manrope.variable}`
      );
      return <Story />;
    }
  ]
};

export default preview;
