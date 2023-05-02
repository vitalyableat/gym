import { FC } from 'react';
import { PageWrap } from '../../ui';
import { LoginForm } from '../../forms/login-form';
import { TrainerLoginForm } from '../../forms/trainer-login-form';

export const Login: FC = () => {
  return (
    <PageWrap>
      <LoginForm />
      <TrainerLoginForm />
    </PageWrap>
  );
};
