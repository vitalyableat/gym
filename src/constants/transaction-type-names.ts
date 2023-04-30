import { TransactionTypeEnum } from '../interfaces';

export const TRANSACTION_TYPE_NAMES: { [key in TransactionTypeEnum]: string } = {
  WORKOUT: 'Тренировка',
  SUBSCRIPTION: 'Абонемент'
};
