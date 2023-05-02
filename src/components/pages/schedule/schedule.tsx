import { FC, useEffect, useState } from 'react';
import { workoutService } from '../../../services/workout';
import { Loader, PageWrap, Text } from '../../ui';
import { Workout } from '../../entities/workout';
import { trainerService } from '../../../services/trainer';

export const Schedule: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    workoutService
      .getTrainerWorkouts(trainerService?.trainer$?.id as number)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" color="#4242aa" center bold>
        Рассписание
      </Text>
      {workoutService.workouts$.map((workout) => (
        <Workout key={workout.id} workout={workout} />
      ))}
    </PageWrap>
  );
};
