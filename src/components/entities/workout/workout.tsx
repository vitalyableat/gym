import { FC } from 'react';
import * as S from './workout.styles';
import { WorkoutProps } from './workout.types';
import { Text } from '../../ui';
import { WORKOUT_TYPE_NAMES } from '../../../constants';

export const Workout: FC<WorkoutProps> = ({ workout }) => {
  return (
    <S.Workout>
      <Text type="header" bold center>
        Тренировка
      </Text>
      <Text bold center>
        {WORKOUT_TYPE_NAMES[workout.type]}
      </Text>
      <Text>
        <b>Дата: </b>
        {workout.date}
      </Text>
      <Text>
        <b>Время: </b>
        {workout.time}
      </Text>
      <Text>
        <b>Клиент: </b>
        {workout.user}
      </Text>
      <Text>
        <b>Тренер: </b>
        {workout.trainer}
      </Text>
      <Text>
        <b>Стоимость: </b>${workout.price}
      </Text>
    </S.Workout>
  );
};
