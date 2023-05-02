import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Loader, PageWrap, Text } from '../../ui';
import { trainerService } from '../../../services/trainer';
import { Trainer } from '../../entities/trainer';

export const Trainers: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    trainerService.getTrainers().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" bold center color="#4242aa">
        Тренеры
      </Text>
      {trainerService.trainers$.map((trainer) => (
        <Trainer key={trainer.id} trainer={trainer} />
      ))}
    </PageWrap>
  );
});
