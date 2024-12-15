import type { FieldAccess, TypeWithID } from 'payload'

import type { User } from '@trroev/payload/payload-types'

export const EveryoneAccess: FieldAccess<TypeWithID, User> = () => true
