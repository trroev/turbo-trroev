import { type CollectionAfterChangeHook, type PayloadRequest } from 'payload'

import { env } from '@trroev/env/payload'

const revalidate = async (slug: string, req: PayloadRequest): Promise<void> => {
  try {
    const res = await fetch(
      `${env.NEXT_PUBLIC_PAYLOAD_URL}/api/revalidate?secret=${env.PAYLOAD_PRIVATE_REVALIDATION_KEY}&slug=${slug}&collection=pages`,
    )

    if (res.ok) {
      req.payload.logger.info(`Revalidated path ${slug}`)
    } else {
      req.payload.logger.error(`Error revalidating path ${slug}`)
    }
  } catch (err) {
    req.payload.logger.error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `Error hitting revalidate route for ${slug}, ${err}`,
    )
  }
}

export const RevalidatePage: CollectionAfterChangeHook = ({ doc, req }) => {
  // eslint-disable-next-line no-void, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  void revalidate(doc.slug, req)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return doc
}
