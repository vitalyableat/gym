import { BuyWorkoutData, ITrainer } from '../../../interfaces';
import { Dispatch, SetStateAction } from 'react';

export interface TrainerTypes {
  trainer: ITrainer;
  setBuyWorkoutData?: Dispatch<SetStateAction<BuyWorkoutData | undefined>>;
}
