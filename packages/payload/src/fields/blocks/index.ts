import type { Field } from 'payload'
import { deepMerge } from 'payload'

import { Hero } from '@trroev/payload/blocks/Hero'

type BlocksField = (overrides?: Partial<Field>) => Field

export const blocks = [Hero]

export const blocksField: BlocksField = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      blocks,
      name: 'blocks',
      type: 'blocks',
    },
    overrides,
  )
