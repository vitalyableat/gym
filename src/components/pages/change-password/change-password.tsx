import { FC } from 'react';
import { PageWrap } from '../../ui';
import { ChangePasswordForm } from '../../forms/change-password-form';

export const ChangePassword: FC = () => {
  return (
    <PageWrap>
      <ChangePasswordForm />
    </PageWrap>
  );
};
