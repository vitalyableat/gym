import { WorkoutPersonResponse, WorkoutTypeEnum } from '../../../interfaces';

export interface WorkoutFormProps {
  time: string;
  date: string;
  price: number;
  trainer: WorkoutPersonResponse & { type: WorkoutTypeEnum[] };
}
