import { FC, useState } from 'react';
import * as S from './trainer.styles';
import { TrainerTypes } from './trainer.types';
import { Column, Text } from '../../ui';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
import { BsInfoSquare } from 'react-icons/bs';
import { InfoIconWrap } from './trainer.styles';

export const Trainer: FC<TrainerTypes> = ({ trainer, freeTime }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <S.Trainer>
      <Text type="header" bold center>
        {trainer.firstName} {trainer.lastName}
      </Text>
      <Text center>{trainer.phoneNumber}</Text>
      <Text bold center>
        {trainer.type.map((type) => WORKOUT_TYPE_NAMES[type]).join(', ')}
      </Text>
      <Text type="header" bold center>
        ${trainer.price.toFixed(2)}
      </Text>
      <InfoIconWrap onClick={() => setIsInfoOpen(!isInfoOpen)}>
        <BsInfoSquare />
      </InfoIconWrap>
      {isInfoOpen && (
        <Column>
          {freeTime.map(
            (freeHours) =>
              !!Object.values(freeHours)[0].length && (
                <Column key={Object.keys(freeHours)[0]}>
                  <Text bold>{Object.keys(freeHours)[0]}</Text>
                  <S.TimeGrid>
                    {Object.values(freeHours)[0].map((hour) => (
                      <S.Time key={hour[0]}>{hour}</S.Time>
                    ))}
                  </S.TimeGrid>
                </Column>
              )
          )}
        </Column>
      )}
    </S.Trainer>
  );
};
