import { action, makeObservable, observable } from 'mobx';
import { getFromLocalStorage } from '../../utils';
import { AuthenticateData, IAuthService, RegisterData } from './auth.types';
import { userService } from '../user';
import { publicApi } from '../index';

class AuthService implements IAuthService {
  token$ = getFromLocalStorage('token') || '';

  constructor() {
    makeObservable(this, {
      token$: observable,
      setToken: action
    });
  }

  setToken(token: string) {
    this.token$ = token;
    localStorage.setItem('token', JSON.stringify(token));
  }

  async authenticate(authenticateData: AuthenticateData) {
    const { data } = await publicApi.post('user/authenticate', authenticateData);
    this.setToken(data.token);
    userService.setUser(data.employee);
  }

  async register(registerData: RegisterData) {
    const { data } = await publicApi.post('user/register', registerData);
    this.setToken(data.token);
    userService.setUser(data.employee);
  }
}

export const authService = new AuthService();
