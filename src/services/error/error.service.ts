import { action, makeObservable, observable } from 'mobx';
import { IError } from '../../interfaces';
import { IErrorService } from './error.types';

class ErrorService implements IErrorService {
  private id = 0;
  errors$: IError[] = [];

  constructor() {
    makeObservable(this, {
      errors$: observable,
      setErrors: action
    });
  }

  setErrors(errors: IError[]) {
    this.errors$ = errors;
  }

  addError(error: Omit<IError, 'id'>): void {
    this.setErrors([...this.errors$, { ...error, id: ++this.id }]);
  }

  removeError(errorId: number): void {
    this.setErrors(this.errors$.filter((error) => error.id !== errorId));
  }
}

export const errorService = new ErrorService();
