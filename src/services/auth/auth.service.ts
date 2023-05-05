import { action, makeObservable, observable } from 'mobx';
import { publicApi } from '../index';
import { getFromLocalStorage } from '../../utils';
import { userService } from '../user';
import { IAuthService, LoginData, SignupData } from './auth.types';
import { IUser, UserRoleEnum } from '../../interfaces';
import { trainerService } from '../trainer';

class AuthService implements IAuthService {
  endpoint = 'auth' as const;
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
    userService.setUser(data.userResponse);
    trainerService.setTrainer(null);
    return data.userResponse.role;
  }

  async loginAsTrainer(authenticateData: LoginData) {
    const { data } = await publicApi.post(this.endpoint + '/trainer', authenticateData);
    userService.setUser({ role: UserRoleEnum.TRAINER } as IUser);
    trainerService.setTrainer({
      ...data,
      priceForWorkout: (data.priceForWorkout / 100).toFixed(2)
    });
    localStorage.setItem('trainer', JSON.stringify(data));
  }

  async signup(registerData: SignupData) {
    const { data } = await publicApi.post(this.endpoint + '/register', registerData);
    this.setToken(data.token);
    userService.setUser(data.userResponse);
  }

  logout() {
    this.setToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('trainer');
    userService.setUser(null);
    trainerService.setTrainer(null);
  }
}

export const authService = new AuthService();
