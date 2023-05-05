import { action, makeObservable, observable } from 'mobx';
import { privateApi, publicApi } from '../index';
import { BuyWorkoutData, IWorkout, WorkoutDTO } from '../../interfaces';
import { IWorkoutService } from './workout.types';
import { getDate } from '../../utils';

class WorkoutService implements IWorkoutService {
  endpoint = 'workouts' as const;
  buyWorkoutData$: BuyWorkoutData = {} as BuyWorkoutData;
  workouts$: WorkoutDTO[] = [];
  workoutSchedule$: { [key: string]: WorkoutDTO[] } = {};

  constructor() {
    makeObservable(this, {
      buyWorkoutData$: observable,
      setByWorkoutData: action,
      workouts$: observable,
      setWorkouts: action,
      workoutSchedule$: observable,
      setWorkoutSchedule: action
    });
  }

  setByWorkoutData(buyWorkoutData: BuyWorkoutData) {
    this.buyWorkoutData$ = buyWorkoutData;
  }

  setWorkouts(workouts: WorkoutDTO[]) {
    this.workouts$ = workouts;
  }

  setWorkoutSchedule(workoutSchedule: { [key: string]: WorkoutDTO[] }) {
    this.workoutSchedule$ = workoutSchedule;
  }

  async getWorkouts() {
    const { data } = await privateApi.get(this.endpoint);
    this.setWorkouts(data);
  }

  async getTrainerWorkouts(id: number) {
    const { data } = await publicApi.get(this.endpoint + '/week/' + id + '/' + getDate());
    this.setWorkoutSchedule(data);
  }

  async buyWorkout(workout: Omit<IWorkout, 'id'>) {
    await privateApi.post(this.endpoint, workout);
  }
}

export const workoutService = new WorkoutService();
