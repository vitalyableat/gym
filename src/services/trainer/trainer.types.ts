import { ITrainer } from '../../interfaces';

export interface ITrainerService {
  endpoint: 'trainers';
  trainer$: ITrainer | null;
  trainers$: ITrainer[];
  applications$: ITrainer[];
  getTrainers: () => void;
  getApplications: () => void;
  applyForTrainer: (application: Omit<ITrainer, 'id' | 'accepted'>) => void;
  hireTrainer: (id: number) => void;
  fireTrainer: (id: number) => void;
  updateTrainer: (trainer: Omit<ITrainer, 'email' | 'accepted'>) => void;
}
