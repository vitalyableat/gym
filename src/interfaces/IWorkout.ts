export interface IWorkout {
  id: number;
  time: string;
  price: string;
  trainerId: number;
  userId: number;
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
