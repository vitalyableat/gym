import { authService } from '../../../../services/auth';
import { RouteNames } from '../router.types';

export const authGuard = () => (authService.token$ ? '' : RouteNames.LOGIN);
