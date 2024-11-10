import {
  createBreadcrumbsField,
  createParentField,
} from '@payloadcms/plugin-nested-docs'
import type {CollectionConfig} from 'payload';

import { env } from '@trroev/env/payload'
import { AdminAccess } from '@trroev/payload/access/Admin'
import { EveryoneAccess } from '@trroev/payload/access/Everyone'
import { blocksField } from '@trroev/payload/fields/blocks'
import { hideFromIndexingField } from '@trroev/payload/fields/hideFromIndexing'
import { publishedDateField } from '@trroev/payload/fields/publishedDate'
import { slugField } from '@trroev/payload/fields/slug'
import { titleField } from '@trroev/payload/fields/title'
import { PopulatePublishDate } from '@trroev/payload/hooks/PopulatePublishDate'
import { RevalidatePage } from '@trroev/payload/hooks/RevalidatePage'

export const Pages: CollectionConfig = {
  access: {
    create: AdminAccess,
    delete: AdminAccess,
    read: EveryoneAccess,
    update: AdminAccess,
  },
  admin: {
    defaultColumns: [
      'title',
      'pathname',
      'status',
      'updatedAt',
      'publishedDate',
    ],
    group: 'Content',
    livePreview: {
      url: ({ data }) => {
        if ('pathname' in data && typeof data.pathname === 'string') {
          return `${env.NEXT_PUBLIC_PAYLOAD_URL}${data.pathname}?isLivePreview=true`
        }

        return ''
      },
    },
    pagination: {
      defaultLimit: 25,
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      tabs: [
        {
          fields: [titleField(), blocksField({ label: 'Body Content' })],
          label: 'Content',
        },
        {
          fields: [
            ...slugField(),
            createParentField('pages'),
            createBreadcrumbsField('pages'),
          ],
          label: 'Path Setup',
        },
      ],
      type: 'tabs',
    },
    publishedDateField(),
    hideFromIndexingField(),
  ],
  hooks: {
    afterChange: [RevalidatePage],
    beforeChange: [PopulatePublishDate],
  },
  slug: 'pages',
  versions: {
    drafts: {
      autosave: {
        interval: 300,
      },
    },
  },
}
