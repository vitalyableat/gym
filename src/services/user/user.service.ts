import { action, makeObservable, observable } from 'mobx';
import { authService } from '../auth';
import { IUserService } from './user.types';
import { IUser } from '../../interfaces/IUser';
import { privateApi } from '../index';

class UserService implements IUserService {
  user$: IUser | null = null;

  constructor() {
    makeObservable(this, {
      user$: observable,
      setUser: action
    });
  }

  setUser(user: IUser | null) {
    this.user$ = user;
  }

  async getUser() {
    const { data } = await privateApi.get('users');
    this.setUser(data);
  }

  logout() {
    authService.setToken('');
    localStorage.removeItem('token');
    this.setUser(null);
  }
}

export const userService = new UserService();
