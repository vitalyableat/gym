import { BuyWorkoutData, IWorkout, WorkoutDTO } from '../../interfaces';

export interface IWorkoutService {
  endpoint: 'workouts';
  buyWorkoutData$: BuyWorkoutData;
  workouts$: WorkoutDTO[];
  getWorkouts: () => void;
  getTrainerWorkouts: (id: number) => void;
  buyWorkout: (card: Omit<IWorkout, 'id'>) => void;
}
