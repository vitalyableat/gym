export interface IAuthService {
  endpoint: 'user';
  token$: string;
  authenticate: (authenticateData: AuthenticateData) => void;
  register: (registerData: RegisterData) => void;
  logout: () => void;
}

export type AuthenticateData = {
  email: string;
  password: string;
};

export type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
