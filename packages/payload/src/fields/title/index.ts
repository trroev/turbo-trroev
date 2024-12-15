import type { TextField } from 'payload'
import { deepMerge } from 'payload'

type TitleField = (overrides?: Partial<TextField>) => TextField

export const titleField: TitleField = overrides =>
  deepMerge<TextField, Partial<TextField>>(
    {
      label: 'Name',
      name: 'title',
      required: true,
      type: 'text',
    },
    overrides ?? {},
  )
