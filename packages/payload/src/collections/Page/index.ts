import { type CollectionConfig } from 'payload'

import { env } from '@trroev/env/payload'
import { AdminAccess } from '@trroev/payload/access/Admin'
import { EveryoneAccess } from '@trroev/payload/access/Everyone'
import { blocksField } from '@trroev/payload/fields/blocks'
import { slugField } from '@trroev/payload/fields/slug'
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
    defaultColumns: ['title', 'pageUrl', 'updatedAt', 'publishedDate'],
    livePreview: {
      url: ({ data }) =>
        `${env.NEXT_PUBLIC_PAYLOAD_URL}/_preview${data.pathname}`,
    },
    pagination: {
      defaultLimit: 25,
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      admin: {
        position: 'sidebar',
      },
      name: 'publishedDate',
      type: 'date',
    },
    slugField(),
    blocksField(),
    {
      admin: {
        position: 'sidebar',
      },
      label: 'Hide page from indexing',
      name: 'hideFromIndexing',
      type: 'checkbox',
    },
  ],
  hooks: {
    afterChange: [RevalidatePage],
    beforeChange: [PopulatePublishDate],
  },
  slug: 'pages',
  versions: {
    drafts: true,
  },
}
