import { IUser } from '../../interfaces';

export interface IUserService {
  endpoint: 'users';
  user$: IUser | null;
  users$: IUser[];
  getUser: () => void;
  getUsers: () => void;
  updateUser: (updateUserData: UpdateUserData) => void;
  changeStatus: (id: number) => void;
  changePassword: (oldPassword: string, newPassword: string) => void;
}

export type UpdateUserData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};
