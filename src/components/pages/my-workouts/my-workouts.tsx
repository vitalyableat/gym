import { FC, useEffect, useState } from 'react';
import { Button, Loader, PageWrap, Text } from '../../ui';
import { observer } from 'mobx-react-lite';
import { workoutService } from '../../../services/workout';
import { Workout } from '../../entities/workout';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../templates/router/router.types';

export const MyWorkouts: FC = observer(() => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    workoutService.getWorkouts().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" color="#4242aa" center bold>
        Мои тренировки
      </Text>
      <Button onClick={() => navigate(RouteNames.WORKOUTS)}>Записаться на тренировку</Button>
      {workoutService.workouts$.map((workout) => (
        <Workout key={workout.id} workout={workout} />
      ))}
    </PageWrap>
  );
});
