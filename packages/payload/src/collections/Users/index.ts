import type { CollectionConfig } from 'payload'

import { AdminAccess } from '@trroev/payload/access/Admin'
import { LoggedInAccess } from '@trroev/payload/access/LoggedIn'

export const Users: CollectionConfig = {
  access: {
    create: AdminAccess,
    read: LoggedInAccess,
    update: AdminAccess,
  },
  admin: {
    group: 'Site Config',
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      defaultValue: 'user',
      name: 'role',
      options: ['user', 'admin'],
      required: true,
      type: 'select',
    },
  ],
  slug: 'users',
}
