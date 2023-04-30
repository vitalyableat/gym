import { WorkoutTypeEnum } from '../interfaces';

export const WORKOUT_TYPE_NAMES: { [key in WorkoutTypeEnum]: string } = {
  CROSSFIT: 'Кроссфит',
  FITNESS: 'Фитнес',
  PILATES: 'Пилатес',
  GYM: 'Тренажерный зал',
  YOGA: 'Йога',
  GROUP: 'Групповые тренировки',
  ZUMBA: 'Зумба'
};
