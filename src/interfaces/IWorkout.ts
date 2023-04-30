export interface IWorkout {
  id: number;
  time: string;
  date: string;
  price: number;
  trainerId: number;
  type: WorkoutTypeEnum;
}

export interface WorkoutDTO {
  id: number;
  time: string;
  date: string;
  price: number;
  trainer: WorkoutPersonResponse;
  user: WorkoutPersonResponse;
  type: WorkoutTypeEnum;
}

export interface WorkoutPersonResponse {
  id: number;
  firstName: string;
  lastName: string;
}

export enum WorkoutTypeEnum {
  CROSSFIT = 'CROSSFIT',
  FITNESS = 'FITNESS',
  PILATES = 'PILATES',
  GYM = 'GYM',
  YOGA = 'YOGA',
  GROUP = 'GROUP',
  ZUMBA = 'ZUMBA'
}
