import { TransactionTypeEnum } from '../interfaces';

export const TRANSACTION_TYPE_NAMES: { [key in TransactionTypeEnum]: string } = {
  CROSSFIT: 'Кроссфит',
  FITNESS: 'Фитнес',
  PILATES: 'Пилатес',
  GYM: 'Тренажерный зал',
  YOGA: 'Йога',
  GROUP: 'Групповые тренировки',
  ZUMBA: 'Зумба',
  ONE_MONTH: 'Абонемент на 1 месяц',
  THREE_MONTH: 'Абонемент на 3 месяца',
  SIX_MONTH: 'Абонемент на 6 месяцев',
  ONE_YEAR: 'Абонемент на 12 месяцев'
};
