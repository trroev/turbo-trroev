import type {CollectionConfig} from 'payload';

import { EveryoneAccess } from '@trroev/payload/access/Everyone'
import { LoggedInAccess } from '@trroev/payload/access/LoggedIn'

export const Media: CollectionConfig = {
  access: {
    create: LoggedInAccess,
    delete: LoggedInAccess,
    read: EveryoneAccess,
    update: LoggedInAccess,
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
  ],
  slug: 'media',
  upload: true,
}
