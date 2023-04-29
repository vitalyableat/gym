export interface IUser {
  id: number;
  role: UserRoleEnum;
}

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
