import { FC, useState } from 'react';
import * as S from './user.styles';
import { UserProps } from './user.types';
import { Loader, Text } from '../../ui';
import { userService } from '../../../services/user';
import { FaBan } from 'react-icons/fa';
import { HiOutlineUserAdd } from 'react-icons/hi';

export const User: FC<UserProps> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);

  const changeStatus = () => {
    setIsLoading(true);
    userService.changeStatus(user.id).finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
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
        <S.IconWrap>
          {user.banned ? (
            <HiOutlineUserAdd size={20} cursor="pointer" onClick={changeStatus} />
          ) : (
            <FaBan size={20} cursor="pointer" color="darkred" onClick={changeStatus} />
          )}
        </S.IconWrap>
      </S.User>
    </>
  );
};
