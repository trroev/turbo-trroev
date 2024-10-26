import { fileURLToPath } from 'url'
import { type NextConfig } from 'next'
import createJiti from 'jiti'

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))('./src/env')

const config: NextConfig = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    '@local/icons',
    '@local/layout',
    '@local/page',
    '@local/svg',
    '@local/ui',
  ],
}

export default config
