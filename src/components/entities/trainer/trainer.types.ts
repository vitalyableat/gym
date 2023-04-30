import { ITrainer } from '../../../interfaces';

export interface TrainerTypes {
  trainer: ITrainer;
  freeTime: { [key: string]: string[] }[];
}
