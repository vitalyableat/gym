import { action, makeObservable, observable } from 'mobx';
import { privateApi, publicApi } from '../index';
import { ITrainer } from '../../interfaces';
import { ITrainerService } from './trainer.types';

class TrainerService implements ITrainerService {
  endpoint = 'trainers' as const;
  trainers$: ITrainer[] = [];
  applications$: ITrainer[] = [];

  constructor() {
    makeObservable(this, {
      trainers$: observable,
      setTrainers: action,
      applications$: observable,
      setApplications: action
    });
  }

  setTrainers(trainers: ITrainer[]) {
    this.trainers$ = trainers;
  }

  setApplications(trainers: ITrainer[]) {
    this.trainers$ = trainers;
  }

  async getTrainers() {
    const { data } = await publicApi.get(this.endpoint);
    this.setTrainers(data);
  }

  async getApplications() {
    const { data } = await privateApi.get(this.endpoint + '/applications');
    this.setApplications(data);
  }

  async applyForTrainer(application: Omit<ITrainer, 'id' | 'accepted'>) {
    await publicApi.post(this.endpoint, application);
  }

  async hireTrainer(id: number) {
    await privateApi.put(this.endpoint + '/applications/' + id);
    this.setApplications(this.applications$.filter((application) => application.id !== id));
  }

  async fireTrainer(id: number) {
    await privateApi.delete(this.endpoint + '/' + id);
    this.setTrainers(this.trainers$.filter((trainer) => trainer.id !== id));
  }

  async updateTrainer(trainer: Omit<ITrainer, 'email' | 'accepted'>) {
    await privateApi.put(this.endpoint, trainer);
  }
}

export const trainerService = new TrainerService();
