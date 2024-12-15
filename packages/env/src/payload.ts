import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { skipValidation } from '@trroev/env/helpers/skipValidation'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_PAYLOAD_URL: z.string(),
  },
  emptyStringAsUndefined: true,

  experimental__runtimeEnv: {
    NEXT_PUBLIC_PAYLOAD_URL: process.env.NEXT_PUBLIC_PAYLOAD_URL,
  },
  server: {
    PAYLOAD_PRIVATE_DATABASE_ENGINE: z
      .enum(['mongo', 'sqlite'])
      .default('mongo'),
    PAYLOAD_PRIVATE_DATABASE_URI: z.string(),
    PAYLOAD_PRIVATE_REVALIDATION_KEY: z.string(),
    PAYLOAD_PRIVATE_SECRET: z.string(),
  },
  skipValidation,
})
