import axios from 'axios';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../constants/common';
import {asyncStorageService} from '../utils/updateAsyncStorage';
const baseURL = 'https://schmell-staging.herokuapp.com/api/';

const axiosService = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

axiosService.interceptors.request.use(
  async config => {
    const token = await asyncStorageService(ACCESS_TOKEN, '', 'GET');
    if (token) {
      config!.headers!.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosService.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === 'undefined') {
      console.error('Something went wrong.');
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + 'auth/refresh/'
    ) {
      console.error('A server/network error occurred.');
      return Promise.reject(error);
    }

    if (
      error.response.data.code === 'token_not_valid' &&
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      const refreshToken = await asyncStorageService(REFRESH_TOKEN, '', 'GET');

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return axiosService
            .post('auth/refresh/', {refresh: refreshToken})
            .then(response => {
              asyncStorageService(ACCESS_TOKEN, response.data.access, 'SET');

              axiosService.defaults.headers.common.Authorization =
                'Bearer ' + response.data.access;
              originalRequest.headers.common.Authorization =
                'Bearer ' + response.data.access;

              return axiosService(originalRequest);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log('Refresh token is expired', tokenParts.exp, now);
        }
      } else {
        console.log('Refresh token not available.');
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  },
);

export default axiosService;
