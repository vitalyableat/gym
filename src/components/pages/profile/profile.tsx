import { FC } from 'react';
import { Column, PageWrap, ProfileLink, Text } from '../../ui';
import { UserInfoForm } from '../../forms/user-info-form';
import { RouteNames } from '../../templates/router/router.types';

export const Profile: FC = () => {
  return (
    <PageWrap>
      <Text type="title" bold center color="#4242aa">
        Профиль
      </Text>
      <UserInfoForm />
      <Column gap="10px">
        <ProfileLink to={RouteNames.MY_SUBSCRIPTIONS}>Мои абонементы</ProfileLink>
        <ProfileLink to={RouteNames.MY_WORKOUTS}>Мои тренировки</ProfileLink>
        <ProfileLink to={RouteNames.CARDS}>Привязанные карты</ProfileLink>
        <ProfileLink to={RouteNames.CHANGE_PASSWORD}>Изменить пароль</ProfileLink>
      </Column>
    </PageWrap>
  );
};
