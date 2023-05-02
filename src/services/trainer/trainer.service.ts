import { action, makeObservable, observable } from 'mobx';
import { privateApi, publicApi } from '../index';
import { ITrainer } from '../../interfaces';
import { ITrainerService } from './trainer.types';
import { getDate } from '../../utils';

class TrainerService implements ITrainerService {
  endpoint = 'trainers' as const;
  trainer$: ITrainer | null = null;
  trainers$: ITrainer[] = [];
  applications$: ITrainer[] = [];

  constructor() {
    makeObservable(this, {
      trainer$: observable,
      setTrainer: action,
      trainers$: observable,
      setTrainers: action,
      applications$: observable,
      setApplications: action
    });
  }

  setTrainer(trainer: ITrainer | null) {
    this.trainer$ = trainer;
  }

  setTrainers(trainers: ITrainer[]) {
    this.trainers$ = trainers;
  }

  setApplications(trainers: ITrainer[]) {
    this.applications$ = trainers;
  }

  async getTrainers() {
    const { data } = await publicApi.get('admin/activeTrainers');
    this.setTrainers(
      data.map((trainer: ITrainer) => ({
        ...trainer,
        priceForWorkout: (+trainer.priceForWorkout / 100).toFixed(2)
      }))
    );
  }

  async getTrainerFreeTime(trainerId: number) {
    const { data } = await publicApi.get('workouts/free/' + trainerId + '/' + getDate());
    return data;
  }

  async getApplications() {
    const { data } = await privateApi.get('admin/' + this.endpoint + '/requests');
    this.setApplications(
      data.map((application: ITrainer) => ({
        ...application,
        priceForWorkout: (+application.priceForWorkout / 100).toFixed(2)
      }))
    );
  }

  async applyForTrainer(application: Omit<ITrainer, 'id' | 'accepted'>) {
    await publicApi.post(this.endpoint + '/application', application);
  }

  async hireTrainer(id: number) {
    await privateApi.put('admin/setStatus/' + id);
    this.setApplications(this.applications$.filter((application) => application.id !== id));
  }

  async fireTrainer(id: number) {
    await privateApi.delete('admin/' + this.endpoint + '/' + id);
    this.setTrainers(this.trainers$.filter((trainer) => trainer.id !== id));
    this.setApplications(this.applications$.filter((application) => application.id !== id));
  }

  async updateTrainer(trainer: Omit<ITrainer, 'id' | 'accepted'>) {
    const { data } = await publicApi.put(this.endpoint, trainer);
    this.setTrainer({ ...data, priceForWorkout: (data.priceForWorkout / 100).toFixed(2) });
  }

  async changePassword(oldPassword: string, newPassword: string, email: string) {
    await publicApi.put(this.endpoint + '/changePassword', {
      email,
      oldPassword,
      newPassword
    });
  }
}

export const trainerService = new TrainerService();
