import { FC } from 'react';
import { PageWrap } from '../../ui';
import { AuthorizationForm } from '../../forms/authorization-form';

export const Login: FC = () => {
  return (
    <PageWrap>
      <AuthorizationForm />
    </PageWrap>
  );
};
