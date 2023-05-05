import { FC, useState } from 'react';
import * as S from './trainer.styles';
import { TrainerTypes } from './trainer.types';
import { Column, Loader, Message, Text } from '../../ui';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
import { BsInfoSquare } from 'react-icons/bs';
import { InfoIconWrap } from './trainer.styles';
import { FreeTime } from '../../../interfaces';
import { trainerService } from '../../../services/trainer';
import { useLocation } from 'react-router-dom';
import { RouteNames } from '../../templates/router/router.types';
import { FaBan } from 'react-icons/fa';
import { userService } from '../../../services/user';

export const Trainer: FC<TrainerTypes> = ({ trainer, setBuyWorkoutData }) => {
  const { pathname } = useLocation();
  const [freeTime, setFreeTime] = useState<FreeTime[]>([]);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);

  const getFreeTime = async () => {
    setIsInfoOpen(!isInfoOpen);
    setIsLoading(true);
    trainerService
      .getTrainerFreeTime(trainer.id)
      .then((data) => {
        setFreeTime(Object.entries(data).map(([key, value]) => ({ [key]: value })) as FreeTime[]);
      })
      .finally(() => setIsLoading(false));
  };

  const prepareWorkoutOrder = (time: string, date: string) => {
    if (!userService.user$) {
      setMessageOpen(true);
      setIsInfoOpen(false);
    } else {
      if (setBuyWorkoutData) {
        setBuyWorkoutData({
          time,
          date,
          price: +trainer.priceForWorkout * 100,
          trainer: { ...trainer, type: trainer.workoutTypes }
        });
      }
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
      setIsInfoOpen(false);
    }
  };

  const fireTrainer = () => {
    setIsLoading(true);
    trainerService.fireTrainer(trainer.id).finally(() => setIsLoading(false));
  };

  return (
    <>
      {isMessageOpen && (
        <Message
          header="Упс..."
          message="Чтобы записаться на тренировку, нужно авторизоваться"
          closeMessage={() => setMessageOpen(false)}
        />
      )}
      <S.Trainer>
        {pathname === RouteNames.TRAINERS && (
          <S.IconWrap>
            <FaBan size={20} cursor="pointer" color="darkred" onClick={fireTrainer} />
          </S.IconWrap>
        )}
        <Text type="header" bold center>
          {trainer.firstName} {trainer.lastName}
        </Text>
        <Text center>{trainer.phoneNumber}</Text>
        <Text bold center>
          {trainer.workoutTypes.map((type) => WORKOUT_TYPE_NAMES[type]).join(', ')}
        </Text>
        <Text type="header" bold center>
          ${trainer.priceForWorkout}
        </Text>
        {pathname === RouteNames.WORKOUTS && (
          <InfoIconWrap onClick={() => (isInfoOpen ? setIsInfoOpen(false) : getFreeTime())}>
            <BsInfoSquare />
          </InfoIconWrap>
        )}
        {isInfoOpen && (
          <Column>
            {isLoading && <Loader />}
            {freeTime.reverse().map(
              (freeHours) =>
                !!Object.values(freeHours)[0].length && (
                  <Column key={Object.keys(freeHours)[0]}>
                    <Text bold>{Object.keys(freeHours)[0]}</Text>
                    <S.TimeGrid>
                      {Object.values(freeHours)[0].map((hour) => (
                        <S.Time
                          key={hour}
                          onClick={() => prepareWorkoutOrder(hour, Object.keys(freeHours)[0])}
                        >
                          {hour}
                        </S.Time>
                      ))}
                    </S.TimeGrid>
                  </Column>
                )
            )}
          </Column>
        )}
      </S.Trainer>
    </>
  );
};
