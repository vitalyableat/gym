import { FC } from 'react';
import * as S from './user.styles';
import { UserProps } from './user.types';
import { Text } from '../../ui';

export const User: FC<UserProps> = ({ user }) => {
  return (
    <S.User>
      <Text type="header" bold center>
        {user.firstName} {user.lastName}
      </Text>
      <Text>
        <b>Почта: </b>
        {user.email}
      </Text>
      <Text>
        <b>Телефон: </b>
        {user.phoneNumber}
      </Text>
    </S.User>
  );
};
