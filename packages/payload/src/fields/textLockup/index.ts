import type { ArrayField, Field, TextField } from 'payload'
import { deepMerge } from 'payload'

import type { BodyFieldOverrides } from '@trroev/payload/fields/body'
import type { EyebrowFieldOverrides } from '@trroev/payload/fields/eyebrow'
import type { HeadingFieldOverrides } from '@trroev/payload/fields/heading'
import { bodyField } from '@trroev/payload/fields/body'
import { eyebrowField } from '@trroev/payload/fields/eyebrow'
import { headingField } from '@trroev/payload/fields/heading'
import { linkField } from '@trroev/payload/fields/link'

export type TextLockupFieldsOverrides = {
  body?: BodyFieldOverrides | false
  callsToAction?: ArrayField | false
  eyebrow?: EyebrowFieldOverrides | false
  heading?: false | HeadingFieldOverrides
  subheading?: false | Partial<TextField>
}

type TextLockupFields = (overrides?: TextLockupFieldsOverrides) => Field[]

export const textLockupFields: TextLockupFields = ({
  body,
  callsToAction,
  eyebrow,
  heading,
  subheading,
} = {}) => [
  ...(eyebrow === false ? [] : [eyebrowField(eyebrow)]),
  ...(heading === false ? [] : [headingField(heading)]),
  ...(subheading === false
    ? []
    : [
        deepMerge(
          {
            label: 'Subheading',
            name: 'subheading',
            type: 'text',
          },
          subheading ?? {},
        ),
      ]),
  ...(body === false ? [] : [bodyField(body)]),
  ...(callsToAction === false
    ? []
    : [
        deepMerge(
          {
            fields: [linkField({ required: true })],
            label: 'Calls to Action',
            name: 'callsToAction',
            type: 'array',
          },
          callsToAction ?? {},
        ),
      ]),
]
