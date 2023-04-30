export interface IWorkout {
  id: number;
  time: string;
  date: string;
  price: number;
  trainerId: number;
  userId: number;
  type: WorkoutTypeEnum;
}

export interface WorkoutDTO {
  id: number;
  time: string;
  date: string;
  price: number;
  trainer: string;
  user: string;
  type: WorkoutTypeEnum;
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
