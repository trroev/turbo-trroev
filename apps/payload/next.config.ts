import { type NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withPayload(nextConfig)
