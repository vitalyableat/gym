export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: UserRoleEnum;
}

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
