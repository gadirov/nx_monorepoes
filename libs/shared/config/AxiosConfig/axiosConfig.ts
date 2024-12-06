import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { keycloak } from '../Keycloak/keycloak';

enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// custom requests part:
export const get = <T>(url: string, config?: AxiosRequestConfig) =>
  axiosInstance.get(url, config).then((res) => res.data as T);

export const post = <T>(url: string, data: T, config?: AxiosRequestConfig) =>
  axiosInstance.post(url, data, config).then((res) => res.data as T);

export const put = <T>(url: string, data: T, config?: AxiosRequestConfig) =>
  axiosInstance.put(url, data, config).then((res) => res.data);

export const deleteRequest = (url: string) =>
  axiosInstance.delete(url).then((res) => res.data);

//
axiosInstance.interceptors.request.use(
  (config: any) => {
    const cb = () => {
      config.headers = config.headers ?? {};
      // config.headers.authorization = `Bearer ${keycloak.token}`;
      config.headers.authorization = `Bearer ${Cookies.get('token')}`;
      return Promise.resolve(config);
    };
    return keycloak.updateToken(5).then(cb).catch(keycloak.logout);
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    //TODO: must be implemented!
    const {
      data: { errorDetail },
      status,
    } = error.response;
    const isUnauthorized = () => status === HttpStatusCode.UNAUTHORIZED;
    const isCommonErr = () =>
      status === HttpStatusCode.NOT_FOUND ||
      status === HttpStatusCode.FORBIDDEN;

    if (isUnauthorized()) {
      Cookies.remove('token');
      window.location.href = '/';
      return;
    } else if (isCommonErr()) {
      window.location.href = '/error';
    }
    return Promise.reject(error.response.data);
  }
);
