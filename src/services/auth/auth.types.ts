import { UserRoleEnum } from '../../interfaces';

export interface IAuthService {
  endpoint: 'auth';
  token$: string;
  login: (loginData: LoginData) => Promise<UserRoleEnum>;
  loginAsTrainer: (loginData: LoginData) => void;
  signup: (signupData: SignupData) => void;
  logout: () => void;
}

export type LoginData = {
  email: string;
  password: string;
};

export type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
