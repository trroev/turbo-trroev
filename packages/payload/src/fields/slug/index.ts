import { deepMerge, type Field } from 'payload'

import { FormatSlug } from '@trroev/payload/hooks/FormatSlug'

type SlugField = (fallbackSlug?: string, overrides?: Partial<Field>) => Field

export const slugField: SlugField = (fallbackSlug = 'title', overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [FormatSlug(fallbackSlug)],
      },
      index: true,
      name: 'slug',
      type: 'text',
      unique: true,
    },
    overrides,
  )
