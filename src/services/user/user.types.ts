import { IUser } from '../../interfaces/IUser';

export interface IUserService {
  user$: IUser | null;
  getUser: () => void;
  logout: () => void;
}
