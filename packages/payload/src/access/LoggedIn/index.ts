import type {FieldAccess, TypeWithID} from 'payload';

import type {User} from '@trroev/payload/payload-types';

export const LoggedInAccess: FieldAccess<TypeWithID, User> = ({
  req: { user },
}) => Boolean(user)
