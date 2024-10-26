import { deepMerge, type Field } from 'payload'

type BlocksField = (overrides?: Partial<Field>) => Field

export const blocks = [
  // BannerBlock,
  // AccordionBlock,
  // TextSectionBreakBlock
]

export const blocksField: BlocksField = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      blocks,
      name: 'content',
      type: 'blocks',
    },
    overrides,
  )
