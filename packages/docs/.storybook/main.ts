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
    config.base = '/ignite-design-system/'

    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        '@shira-ui/react': path.resolve(__dirname, '../../react/dist'),
        '@shira-ui/tokens': path.resolve(__dirname, '../../tokens/dist'),
      },
    }
    return config
  },
}

export default config