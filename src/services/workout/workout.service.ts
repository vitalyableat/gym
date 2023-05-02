import { action, makeObservable, observable } from 'mobx';
import { privateApi } from '../index';
import { BuyWorkoutData, IWorkout, WorkoutDTO } from '../../interfaces';
import { IWorkoutService } from './workout.types';
import { getDate } from '../../utils';

class WorkoutService implements IWorkoutService {
  endpoint = 'workouts' as const;
  buyWorkoutData$: BuyWorkoutData = {} as BuyWorkoutData;
  workouts$: WorkoutDTO[] = [];

  constructor() {
    makeObservable(this, {
      buyWorkoutData$: observable,
      setByWorkoutData: action,
      workouts$: observable,
      setWorkouts: action
    });
  }

  setByWorkoutData(buyWorkoutData: BuyWorkoutData) {
    this.buyWorkoutData$ = buyWorkoutData;
  }

  setWorkouts(workouts: WorkoutDTO[]) {
    this.workouts$ = workouts;
  }

  async getWorkouts() {
    const { data } = await privateApi.get(this.endpoint);
    this.setWorkouts(data);
  }

  async getTrainerWorkouts(id: number) {
    const { data } = await privateApi.get(this.endpoint + '/week/' + id + '/' + getDate());
    this.setWorkouts(data);
  }

  async buyWorkout(card: Omit<IWorkout, 'id'>) {
    await privateApi.post(this.endpoint, card);
  }
}

export const workoutService = new WorkoutService();
