import type { MetadataRoute } from 'next'

type GenerateRobotsProps = {
  pathsToExclude?: string[]
  publicSiteUrl?: string
}

export const generateRobots = ({
  pathsToExclude = [],
  publicSiteUrl,
}: GenerateRobotsProps): MetadataRoute.Robots => ({
  rules: {
    allow: publicSiteUrl ? '/' : '',
    disallow: publicSiteUrl ? [...pathsToExclude] : ['/'],
    userAgent: '*',
  },
  sitemap: publicSiteUrl ? `${publicSiteUrl}/sitemap.xml` : '',
})
