import { FC } from 'react';
import { PageWrap, ProfileLink, Text } from '../../ui';
import { TrainerInfoForm } from '../../forms/trainer-info-form';
import { RouteNames } from '../../templates/router/router.types';

export const PersonalAccount: FC = () => {
  return (
    <PageWrap>
      <Text type="title" bold center color="#4242aa">
        Личный кабинет
      </Text>
      <TrainerInfoForm />
      <ProfileLink to={RouteNames.CHANGE_PASSWORD}>Изменить пароль</ProfileLink>
    </PageWrap>
  );
};
