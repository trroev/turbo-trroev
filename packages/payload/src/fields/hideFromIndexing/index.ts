import type { CheckboxField } from 'payload'
import { deepMerge } from 'payload'

type HideFromIndexingField = (
  overrides?: Partial<CheckboxField>,
) => CheckboxField

export const hideFromIndexingField: HideFromIndexingField = overrides =>
  deepMerge<CheckboxField, Partial<CheckboxField>>(
    {
      admin: {
        position: 'sidebar',
      },
      label: 'Hide page from indexing',
      name: 'hideFromIndexing',
      type: 'checkbox',
    },
    overrides ?? {},
  )
