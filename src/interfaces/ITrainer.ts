import { WorkoutTypeEnum } from './IWorkout';

export interface ITrainer {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  price: number;
  accepted: boolean;
  type: WorkoutTypeEnum[];
}
