import type { TextField } from 'payload'
import { deepMerge } from 'payload'

export type EyebrowFieldOverrides = Partial<TextField>

type EyebrowField = (overrides?: EyebrowFieldOverrides) => TextField

export const eyebrowField: EyebrowField = overrides =>
  deepMerge<TextField, Partial<TextField>>(
    {
      label: 'Eyebrow',
      name: 'eyebrow',
      type: 'text',
    },
    overrides ?? {},
  )
