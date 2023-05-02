import { WorkoutTypeEnum } from './IWorkout';

export interface ITrainer {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  priceForWorkout: string;
  isAcceptedRequest: boolean;
  workoutTypes: WorkoutTypeEnum[];
}

export interface FreeTime {
  [key: string]: string[];
}
