import { FC, useEffect, useState } from 'react';
import { workoutService } from '../../../services/workout';
import { Loader, PageWrap, Text, Row } from '../../ui';
import { trainerService } from '../../../services/trainer';
import { observer } from 'mobx-react-lite';
import * as S from './schedule.styles';
import { WORKOUT_TYPE_NAMES } from '../../../constants';

export const Schedule: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    workoutService
      .getTrainerWorkouts(trainerService?.trainer$?.id as number)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap alignItems="start" padding="30px 0">
      {isLoading && <Loader />}
      <Text type="title" color="#4242aa" center bold width="100%">
        Рассписание
      </Text>
      <S.Schedule>
        <Row>
          <S.TimeLine>
            {Array.from(Array(8).keys()).map((key) => (
              <S.Time key={key}>
                <Text>{key + 9}:00</Text>
              </S.Time>
            ))}
          </S.TimeLine>
          {Object.entries(workoutService.workoutSchedule$)
            .reverse()
            .map(([date, workouts]) => (
              <S.DayColumn key={date}>
                <S.DayDate>{date}</S.DayDate>
                {workouts.map((workout) => (
                  <S.ScheduleWorkout key={workout.id} time={+workout.time.split(':')[0]}>
                    <Text type="header" bold center>
                      {WORKOUT_TYPE_NAMES[workout.type]}
                    </Text>
                    <Text>
                      <b>Клиент: </b>
                      {workout.user.firstName} {workout.user.lastName}
                    </Text>
                    <Text>
                      <b>Стоимость: </b>${(workout.price / 100).toFixed(2)}
                    </Text>
                  </S.ScheduleWorkout>
                ))}
              </S.DayColumn>
            ))}
        </Row>
      </S.Schedule>
    </PageWrap>
  );
});
