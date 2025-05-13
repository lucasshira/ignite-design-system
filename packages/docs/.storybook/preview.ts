import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      value: {
        name: 'dark',
        value: '#000000',
      }
    },
    darkMode: {
      current: 'dark',
      dark: { ...themes.dark, appBg: '#000000' },
      light: { ...themes.normal, appBg: 'red' },
    },
    tags: ['autodocs']
  },
};

export default preview;