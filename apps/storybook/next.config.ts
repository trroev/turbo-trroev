import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  transpilePackages: ['@trroev/ui'],
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      config.resolve.fallback = {
        fs: false,
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config
  },
}

export default nextConfig
