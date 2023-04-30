import { FC } from 'react';
import * as S from './application.styles';
import { ApplicationProps } from './application.types';
import { Text } from '../../ui';
import { WORKOUT_TYPE_NAMES } from '../../../constants';

export const Application: FC<ApplicationProps> = ({ application }) => {
  return (
    <S.Application>
      <Text type="header" bold center>
        {application.firstName} {application.lastName}
      </Text>
      <Text>
        <b>Почта: </b>
        {application.email}
      </Text>
      <Text>
        <b>Телефон: </b>
        {application.phoneNumber}
      </Text>
      <Text>
        <b>Типы тренировок: </b>
        {application.type.map((type) => WORKOUT_TYPE_NAMES[type]).join(', ')}
      </Text>
      <Text>
        <b>Цена тренировки: </b>${application.price.toFixed(2)}
      </Text>
    </S.Application>
  );
};
