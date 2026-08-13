import type { Prisma } from '../generated/prisma';

/** Use on `User` relation filters to hide suspended accounts from directory/list APIs */
export const activeUserWhere: Prisma.UserWhereInput = {
  isSuspended: false,
};
