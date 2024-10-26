import { deepMerge, type Field } from 'payload'

type BlocksField = (overrides?: Partial<Field>) => Field

export const blocks = []

export const blocksField: BlocksField = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      blocks,
      name: 'content',
      type: 'blocks',
    },
    overrides,
  )
