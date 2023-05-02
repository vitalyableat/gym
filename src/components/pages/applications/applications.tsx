import { FC, useEffect, useState } from 'react';
import { Loader, PageWrap, Text } from '../../ui';
import { trainerService } from '../../../services/trainer';
import { Application } from '../../entities/application';
import { observer } from 'mobx-react-lite';

export const Applications: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    trainerService.getApplications().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" color="#4242aa" bold center>
        Заявления
      </Text>
      {trainerService.applications$.map((application) => (
        <Application key={application.id} application={application} />
      ))}
    </PageWrap>
  );
});
