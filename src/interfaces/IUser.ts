export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: UserRoleEnum;
  banned: boolean;
}

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  TRAINER = 'TRAINER',
  USER = 'USER'
}
