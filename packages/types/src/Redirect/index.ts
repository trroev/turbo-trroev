import { z } from 'zod'

export const RedirectSchema = z.object({
  destinationUrl: z.string(),
  includeSearchParams: z.boolean().default(true),
  sourceUrl: z.string(),
  statusCode: z
    .union([z.literal(301), z.literal(302), z.literal(307), z.literal(308)])
    .default(302),
})

export type Redirect = z.infer<typeof RedirectSchema>
