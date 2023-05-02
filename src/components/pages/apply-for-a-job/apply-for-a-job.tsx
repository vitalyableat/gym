import { FC } from 'react';
import { PageWrap } from '../../ui';
import { ApplicationForm } from '../../forms/application-form';

export const ApplyForAJob: FC = () => {
  return (
    <PageWrap>
      <ApplicationForm />
    </PageWrap>
  );
};
