import { FC } from 'react';
import { PageWrap } from '../../ui';
import { SignupForm } from '../../forms/signup-form';

export const Signup: FC = () => {
  return (
    <PageWrap>
      <SignupForm />
    </PageWrap>
  );
};
