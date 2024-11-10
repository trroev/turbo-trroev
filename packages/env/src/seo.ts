import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { skipValidation } from '@trroev/env/helpers/skipValidation'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
  },
  emptyStringAsUndefined: true,

  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  server: {},
  skipValidation,
})
