import axios, { AxiosInstance } from 'axios';
import { getFromLocalStorage } from '../utils';
import { errorService } from './error';
import { IError } from '../interfaces';

const createApi = (): AxiosInstance => axios.create({ baseURL: 'http://localhost:8080/' });

export const publicApi = createApi();
publicApi.interceptors.response.use(
  (response) => response,
  (error) => {
    errorService.addError(error.response?.data as IError);
    throw Error(error.response?.data?.message);
  }
);

export const privateApi = createApi();
privateApi.interceptors.request.use((config) => {
  config.headers.setAuthorization(`Bearer ${getFromLocalStorage('token')}`);
  return config;
});
privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    errorService.addError(error.response?.data as IError);
    throw Error(error.response?.data?.message);
  }
);
