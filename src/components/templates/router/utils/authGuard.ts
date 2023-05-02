import { RouteNames } from '../router.types';
import { userService } from '../../../../services/user';

export const authGuard = () => (userService.user$?.role ? '' : RouteNames.LOGIN);
