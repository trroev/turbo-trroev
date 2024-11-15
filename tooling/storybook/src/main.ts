import path from 'node:path'
import type { StorybookConfig } from '@storybook/nextjs'

const getAbsolutePath = (packageName: string): string =>
  path.dirname(import.meta.resolve(path.join(packageName, 'package.json')))

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-viewport'),
    getAbsolutePath('storybook-react-i18next'),
    {
      name: getAbsolutePath('@storybook/addon-styling-webpack'),
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 },
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: 'postcss-loader',
                options: { implementation: import.meta.resolve('postcss') },
              },
            ],
          },
        ],
      },
    },
  ],
  docs: {},
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  stories: [
    '../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  // staticDirs: ['../public'],
  typescript: { reactDocgen: 'react-docgen' },
}

export { config }
