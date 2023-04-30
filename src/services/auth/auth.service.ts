import { action, makeObservable, observable } from 'mobx';
import { publicApi } from '../index';
import { getFromLocalStorage } from '../../utils';
import { userService } from '../user';
import { LoginData, IAuthService, SignupData } from './auth.types';

class AuthService implements IAuthService {
  endpoint = 'user' as const;
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

  async login(authenticateData: LoginData) {
    const { data } = await publicApi.post(this.endpoint + '/authenticate', authenticateData);
    this.setToken(data.token);
    userService.setUser(data.employee);
  }

  async signup(registerData: SignupData) {
    const { data } = await publicApi.post(this.endpoint + '/register', registerData);
    this.setToken(data.token);
    userService.setUser(data.employee);
  }

  logout() {
    this.setToken('');
    localStorage.removeItem('token');
    userService.setUser(null);
  }
}

export const authService = new AuthService();
