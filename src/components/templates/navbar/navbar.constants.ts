import { Link } from './navbar.types';
import { RouteNames } from '../router/router.types';

export const NAVBAR_LINKS: Link[] = [
  { name: 'Главная', link: RouteNames.MAIN },
  { name: 'О нас', link: RouteNames.ABOUT },
  { name: 'Вход', link: RouteNames.LOGIN },
  { name: 'Регистрация', link: RouteNames.SIGNUP },
  { name: 'FAQ', link: RouteNames.FAQ },
  { name: 'Тренировки', link: RouteNames.WORKOUTS }
];
