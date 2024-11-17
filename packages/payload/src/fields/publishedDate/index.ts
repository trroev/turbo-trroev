import {  deepMerge } from 'payload'
import type {DateField} from 'payload';

type PublishedDateField = (overrides?: Partial<DateField>) => DateField

export const publishedDateField: PublishedDateField = overrides =>
  deepMerge<DateField, Partial<DateField>>(
    {
      admin: {
        position: 'sidebar',
      },
      label: 'Published Date',
      name: 'publishedDate',
      type: 'date',
    },
    overrides ?? {},
  )
