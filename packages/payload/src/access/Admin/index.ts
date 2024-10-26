import { type FieldAccess, type TypeWithID } from 'payload'

import { type User } from '@trroev/payload/payload-types'

export const AdminAccess: FieldAccess<TypeWithID, User> = ({ req: { user } }) =>
  user?.role === 'admin'
