import type { TextareaField } from 'payload'
import { deepMerge } from 'payload'

export type BodyFieldOverrides = Partial<TextareaField>
type BodyField = (overrides?: BodyFieldOverrides) => TextareaField
export const bodyField: BodyField = overrides =>
  deepMerge<TextareaField, Partial<TextareaField>>(
    {
      label: 'Body',
      name: 'body',
      type: 'textarea',
    },
    overrides ?? {},
  )
