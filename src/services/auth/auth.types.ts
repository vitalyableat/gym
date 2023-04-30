export interface IAuthService {
  endpoint: 'user';
  token$: string;
  login: (loginData: LoginData) => void;
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
