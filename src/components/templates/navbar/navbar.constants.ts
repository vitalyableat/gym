import { Link } from './navbar.types';
import { RouteNames } from '../router/router.types';
import { UserRoleEnum } from '../../../interfaces';

export const GUEST_LINKS: Link[] = [
  { name: 'Главная', link: RouteNames.MAIN },
  { name: 'О нас', link: RouteNames.ABOUT },
  { name: 'Тренировки', link: RouteNames.WORKOUTS },
  { name: 'FAQ', link: RouteNames.FAQ },
  { name: 'Контакты', link: RouteNames.CONTACTS },
  { name: 'Войти', link: RouteNames.LOGIN }
];

const USER_LINKS: Link[] = [
  { name: 'Главная', link: RouteNames.MAIN },
  { name: 'О нас', link: RouteNames.ABOUT },
  { name: 'Тренировки', link: RouteNames.WORKOUTS },
  { name: 'FAQ', link: RouteNames.FAQ },
  { name: 'Контакты', link: RouteNames.CONTACTS },
  { name: 'Профиль', link: RouteNames.PROFILE },
  { name: 'Выйти', link: RouteNames.LOGIN }
];

const TRAINER_LINKS: Link[] = [
  { name: 'Личный кабинет', link: RouteNames.PERSONAL_ACCOUNT },
  { name: 'Рассписание', link: RouteNames.SCHEDULE },
  { name: 'Выйти', link: RouteNames.LOGIN }
];

const ADMIN_LINKS: Link[] = [
  { name: 'Заявления', link: RouteNames.APPLICATIONS },
  { name: 'Тренеры', link: RouteNames.TRAINERS },
  { name: 'Клиенты', link: RouteNames.CLIENTS },
  { name: 'Транзакции', link: RouteNames.TRANSACTIONS },
  { name: 'Выйти', link: RouteNames.LOGIN }
];

export const NAVBAR_LINKS: { [key in UserRoleEnum]: Link[] } = {
  USER: USER_LINKS,
  ADMIN: ADMIN_LINKS,
  TRAINER: TRAINER_LINKS
};
