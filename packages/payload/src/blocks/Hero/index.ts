import type { Block } from 'payload'

import { imageField } from '@trroev/payload/fields/image'
import { textLockupFields } from '@trroev/payload/fields/textLockup'

export const Hero: Block = {
  fields: [
    imageField({
      mediaOverrides: {
        label: 'Background Image',
        name: 'backgroundImage',
        required: true,
      },
    }),
    ...textLockupFields(),
  ],
  interfaceName: 'HeroBlock',
  labels: {
    plural: 'Heroes',
    singular: 'Hero',
  },
  slug: 'Hero',
}
