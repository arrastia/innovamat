import axios from 'axios';

import type { AxiosPromise, AxiosRequestHeaders, ResponseType } from 'axios';

interface HTTPProps<D = any> {
  data?: D;
  headers?: AxiosRequestHeaders;
  responseType?: ResponseType;
  url: string;
}

const authAxios = axios.create({ baseURL: 'https://api.mocklets.com/mock68016' });

const get = (options: HTTPProps): AxiosPromise => {
  return authAxios.get(`${options.url}`, { params: options.data, responseType: options.responseType });
};

const post = (options: HTTPProps): AxiosPromise => {
  return authAxios.post(`${options.url}`, { params: options.data, responseType: options.responseType });
};

const remove = (options: HTTPProps): AxiosPromise => {
  return authAxios.delete(`${options.url}`, { params: options.data, responseType: options.responseType });
};

const update = (options: HTTPProps): AxiosPromise => {
  return authAxios.put(`${options.url}`, { params: options.data, responseType: options.responseType });
};

export const HTTPUtils = { get, post, remove, update };
