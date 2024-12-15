// eslint-disable-next-line unicorn/prefer-node-protocol, unicorn/import-style
import path, { dirname, join } from 'path'
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-react-i18next'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/nextjs') as '@storybook/nextjs',

    options: {},
  },

  stories: [
    '../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  // staticDirs: ['../public'],

  typescript: { reactDocgen: 'react-docgen' },

  webpackFinal: (config, { configType: _configType }) => {
    config.resolve = config.resolve ?? {}
    config.resolve.fallback = {
      assert: false,
      buffer: false,
      console: false,
      constants: false,
      crypto: false,
      domain: false,
      events: false,
      fs: false,
      http: false,
      https: false,
      os: false,
      path: false,
      process: false,
      punycode: false,
      querystring: false,
      stream: false,
      string_decoder: false,
      sys: false,
      timers: false,
      tty: false,
      url: false,
      util: false,
      vm: false,
      zlib: false,
    }

    config.module = config.module ?? {}
    config.module.rules = config.module.rules ?? []
    config.module.rules.push({
      include: path.resolve(process.cwd(), '../src'),
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true, // Enable modules to help you using className
          },
        },
      ],
    })

    return config
  },
}

export default config

function getAbsolutePath(value: string) {
  // eslint-disable-next-line unicorn/prefer-module
  return dirname(require.resolve(join(value, 'package.json')))
}
