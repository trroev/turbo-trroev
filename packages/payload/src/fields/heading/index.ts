import type { TextField } from 'payload'
import { deepMerge } from 'payload'

export type HeadingFieldOverrides = Partial<TextField>

type HeadingField = (overrides?: HeadingFieldOverrides) => TextField

export const headingField: HeadingField = overrides =>
  deepMerge<TextField, Partial<TextField>>(
    {
      label: 'Heading',
      name: 'heading',
      type: 'text',
    },
    overrides ?? {},
  )
