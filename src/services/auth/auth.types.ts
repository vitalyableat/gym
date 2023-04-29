export interface IAuthService {
  token$: string;
  authenticate: (authenticateData: AuthenticateData) => void;
  register: (registerData: RegisterData) => void;
}

export type AuthenticateData = {
  email: string;
  password: string;
};

export type RegisterData = {
  email: string;
  password: string;
};
