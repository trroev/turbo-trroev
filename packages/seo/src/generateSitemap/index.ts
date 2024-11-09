/* eslint-disable no-console */
import type { MetadataRoute } from 'next'

import { env } from '@trroev/env/seo'

// eslint-disable-next-line @typescript-eslint/require-await
export const generateSitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const publicSiteUrl = env.NEXT_PUBLIC_SITE_URL
  if (!publicSiteUrl) {
    return []
  }

  console.log('Implement sitemap logic here!')

  return []
}
