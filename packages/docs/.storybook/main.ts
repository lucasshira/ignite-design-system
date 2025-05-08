// import type { StorybookConfig } from '@storybook/react-vite';

// import { join, dirname } from "path"

// /**
// * This function is used to resolve the absolute path of a package.
// * It is needed in projects that use Yarn PnP or are set up within a monorepo.
// */
// function getAbsolutePath(value: string): any {
//   return dirname(require.resolve(join(value, 'package.json')))
// }
// const config: StorybookConfig = {
//   "stories": [
//     "../src/**/*.mdx",
//     "../src/**/*.stories.tsx"
//   ],
//   "addons": [
//     getAbsolutePath('@storybook/addon-essentials'),
//     getAbsolutePath('@storybook/addon-onboarding'),
//     getAbsolutePath('@chromatic-com/storybook'),
//     getAbsolutePath("@storybook/experimental-addon-test")
//   ],
//   "framework": {
//     "name": getAbsolutePath('@storybook/react-vite'),
//     "options": {}
//   }
// };
// export default config;

import { StorybookConfig } from '@storybook/react-vite'
import path from 'node:path'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', 'storybook-dark-mode', '@storybook/addon-docs'],
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