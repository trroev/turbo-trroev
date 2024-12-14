import type { UploadField } from 'payload'
import { deepMerge } from 'payload'

import type { MediaFieldOverrides } from '@trroev/payload/fields/media'
import { mediaField } from '@trroev/payload/fields/media'

export type ImageFieldOverrides = {
  imageOverrides?: {
    supportedFormats?: string[]
  }
} & MediaFieldOverrides

type ImageField = (overrides?: ImageFieldOverrides) => UploadField

export const imageField: ImageField = (overrides = {}) => {
  const { imageOverrides = {}, ...mediaOverrides } = overrides
  const {
    supportedFormats = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/svg+xml',
    ],
  } = imageOverrides

  const imageField = mediaField(
    deepMerge(
      {
        mediaOverrides: {
          filterOptions: {
            or: supportedFormats.map(format => ({
              mimeType: {
                contains: format,
              },
            })),
          },
          label: 'Image',
          name: 'image',
        },
      },
      mediaOverrides,
    ),
  )

  return { ...imageField }
}
