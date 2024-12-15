import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /**
   * Specify your client-side environment variables schema here.
   * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {},

  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },

  /**
   * Specify your server-side environment variables schema here.
   * This way you can ensure the app isn't built with invalid env vars.
   */
  server: {},
  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },
  skipValidation:
    Boolean(process.env.CI) ||
    Boolean(process.env.SKIP_ENV_VALIDATION) ||
    process.env.npm_lifecycle_event === 'lint',
})
