import { IError } from '../../interfaces';

export interface IErrorService {
  errors$: IError[];
  addError(error: Omit<IError, 'id'>): void;
  removeError(errorId: number): void;
}
