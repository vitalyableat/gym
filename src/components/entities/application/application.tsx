import { FC, useState } from 'react';
import * as S from './application.styles';
import { ApplicationProps } from './application.types';
import { Loader, Text } from '../../ui';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
import { GrUserWorker } from 'react-icons/gr';
import { BsTrashFill } from 'react-icons/bs';
import { trainerService } from '../../../services/trainer';

export const Application: FC<ApplicationProps> = ({ application }) => {
  const [isLoading, setIsLoading] = useState(false);

  const hireTrainer = () => {
    setIsLoading(true);
    trainerService.hireTrainer(application.id).finally(() => setIsLoading(false));
  };

  const fireTrainer = () => {
    setIsLoading(true);
    trainerService.fireTrainer(application.id).finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      <S.Application>
        <Text type="header" bold center>
          {application.firstName} {application.lastName}
        </Text>
        <Text>
          <b>Почта: </b>
          {application.email}
        </Text>
        <Text>
          <b>Телефон: </b>
          {application.phoneNumber}
        </Text>
        <Text>
          <b>Типы тренировок: </b>
          {application.workoutTypes.map((type) => WORKOUT_TYPE_NAMES[type]).join(', ')}
        </Text>
        <Text>
          <b>Цена тренировки: </b>${application.priceForWorkout}
        </Text>
        <S.IconWrap>
          <GrUserWorker size={20} cursor="pointer" onClick={hireTrainer} />
          <BsTrashFill size={20} cursor="pointer" onClick={fireTrainer} />
        </S.IconWrap>
      </S.Application>
    </>
  );
};
