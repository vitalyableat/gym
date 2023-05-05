import { FC, useEffect, useState } from 'react';
import { Loader, PageWrap, Text } from '../../ui';
import { observer } from 'mobx-react-lite';
import { trainerService } from '../../../services/trainer';
import { Trainer } from '../../entities/trainer';
import { WorkoutForm } from '../../forms/workout-form';
import { BuyWorkoutData } from '../../../interfaces';

export const Workouts: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [buyWorkoutData, setBuyWorkoutData] = useState<BuyWorkoutData | undefined>();

  useEffect(() => {
    trainerService.getTrainers().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" color="#4242aa" bold center>
        Наши тренера
      </Text>
      {trainerService.trainers$.map((trainer) => (
        <Trainer key={trainer.id} trainer={trainer} setBuyWorkoutData={setBuyWorkoutData} />
      ))}
      <WorkoutForm
        buyWorkoutData={buyWorkoutData}
        resetTrainer={() => setBuyWorkoutData(undefined)}
      />
    </PageWrap>
  );
});
