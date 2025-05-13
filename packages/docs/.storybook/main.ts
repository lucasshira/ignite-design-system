import { StorybookConfig } from '@storybook/react-vite'
import path from 'node:path'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode', '@storybook/addon-docs', '@storybook/addon-a11y'],
  docs: {
    defaultName: 'Documentation',
  },
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        '@ignite-ui/react': path.resolve(__dirname, '../../react/dist'),
        '@ignite-ui/tokens': path.resolve(__dirname, '../../tokens/dist'),
      },
    }
    return config
  },
}

export default config