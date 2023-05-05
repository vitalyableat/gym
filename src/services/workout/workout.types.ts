import { BuyWorkoutData, IWorkout, WorkoutDTO } from '../../interfaces';

export interface IWorkoutService {
  endpoint: 'workouts';
  buyWorkoutData$: BuyWorkoutData;
  workouts$: WorkoutDTO[];
  workoutSchedule$: { [key: string]: WorkoutDTO[] };
  getWorkouts: () => void;
  getTrainerWorkouts: (id: number) => void;
  buyWorkout: (workout: Omit<IWorkout, 'id'>) => void;
}
