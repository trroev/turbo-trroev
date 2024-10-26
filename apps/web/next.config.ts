import { fileURLToPath } from 'url'
import { type NextConfig } from 'next'
import createJiti from 'jiti'

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))('./src/env')

const config: NextConfig = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    '@trroev/icons',
    '@trroev/layout',
    '@trroev/page',
    '@trroev/svg',
    '@trroev/ui',
  ],
}

export default config
