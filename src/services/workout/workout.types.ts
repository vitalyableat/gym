import { IWorkout } from '../../interfaces';

export interface IWorkoutService {
  endpoint: 'workouts';
  workouts$: IWorkout[];
  getWorkouts: () => void;
  getTrainerWorkouts: (id: number) => void;
  buyWorkout: (card: Omit<IWorkout, 'id'>) => void;
}
