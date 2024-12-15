import type { FieldHook } from 'payload'

import { formatSlug } from '@trroev/payload/helpers/formatSlug'

export const useFormatSlug =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === 'string') {
      return formatSlug(value)
    }

    if (
      data &&
      (operation === 'create' || !data.slug) &&
      fallback &&
      fallback in data &&
      typeof data[fallback] === 'string'
    ) {
      return formatSlug(data[fallback])
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value
  }
