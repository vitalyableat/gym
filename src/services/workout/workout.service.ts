import { action, makeObservable, observable } from 'mobx';
import { privateApi } from '../index';
import { IWorkout } from '../../interfaces';
import { IWorkoutService } from './workout.types';

class WorkoutService implements IWorkoutService {
  endpoint = 'workouts' as const;
  workouts$: IWorkout[] = [];

  constructor() {
    makeObservable(this, {
      workouts$: observable,
      setWorkouts: action
    });
  }

  setWorkouts(workouts: IWorkout[]) {
    this.workouts$ = workouts;
  }

  async getWorkouts() {
    const { data } = await privateApi.get(this.endpoint);
    this.setWorkouts(data);
  }

  async getTrainerWorkouts(id: number) {
    const { data } = await privateApi.get(this.endpoint + '/' + id);
    this.setWorkouts(data);
  }

  async buyWorkout(card: Omit<IWorkout, 'id'>) {
    await privateApi.post(this.endpoint, card);
  }
}

export const workoutService = new WorkoutService();
