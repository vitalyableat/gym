import { RouteNames } from '../router.types';
import { UserRoleEnum } from '../../../../interfaces';
import { userService } from '../../../../services/user';

export const roleGuard = (roles: UserRoleEnum[]) => () =>
  !userService.user$ || !roles.includes(userService.user$.role) ? RouteNames.NOT_FOUND : '';
