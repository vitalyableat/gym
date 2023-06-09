import { action, makeObservable, observable } from 'mobx';
import { privateApi } from '../index';
import { IUser } from '../../interfaces';
import { IUserService, UpdateUserData } from './user.types';

class UserService implements IUserService {
  endpoint = 'users' as const;
  user$: IUser | null = null;
  users$: IUser[] = [];

  constructor() {
    makeObservable(this, {
      user$: observable,
      setUser: action,
      users$: observable,
      setUsers: action
    });
  }

  setUser(user: IUser | null) {
    this.user$ = user;
  }

  setUsers(users: IUser[]) {
    this.users$ = users;
  }

  async getUser() {
    const { data } = await privateApi.get(this.endpoint);
    this.setUser(data);
  }

  async getUsers() {
    const { data } = await privateApi.get('admin/' + this.endpoint);
    this.setUsers(data);
  }

  async updateUser(updateUserData: UpdateUserData) {
    const { data } = await privateApi.put(this.endpoint, updateUserData);
    this.setUser(data);
  }

  async changeStatus(id: number) {
    await privateApi.put('admin/' + this.endpoint + '/changeStatus/' + id);
    this.setUsers(
      this.users$.map((user) => (user.id === id ? { ...user, banned: !user.banned } : user))
    );
  }

  async changePassword(oldPassword: string, newPassword: string) {
    await privateApi.put(this.endpoint + '/changePassword', {
      oldPassword,
      newPassword
    });
  }
}

export const userService = new UserService();
