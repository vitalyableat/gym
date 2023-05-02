import { FreeTime, ITrainer } from '../../interfaces';

export interface ITrainerService {
  endpoint: 'trainers';
  trainer$: ITrainer | null;
  trainers$: ITrainer[];
  applications$: ITrainer[];
  getTrainers: () => void;
  getTrainerFreeTime: (id: number) => Promise<FreeTime[]>;
  getApplications: () => void;
  applyForTrainer: (application: Omit<ITrainer, 'id' | 'accepted'>) => void;
  hireTrainer: (id: number) => void;
  fireTrainer: (id: number) => void;
  updateTrainer: (trainer: Omit<ITrainer, 'id' | 'accepted'>) => void;
  changePassword: (oldPassword: string, newPassword: string, email: string) => void;
}
