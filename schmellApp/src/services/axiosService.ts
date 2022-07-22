import axios from 'axios';
import RNUniqueId from '../native/RNUniqueId';
import {decrypt} from '../utils/crypto';
import encryptedStorageService from './encryptedStorageService';

const axiosService = axios.create({
  baseURL: decrypt('aHR0cHM6Ly9zY2htZWxsLXN0YWdpbmcuaGVyb2t1YXBwLmNvbS9hcGkv'),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const authService = axios.create({
  baseURL: decrypt(
    'aHR0cHM6Ly9zY2htZWxsLXN0YWdpbmcuaGVyb2t1YXBwLmNvbS9hcGkvYXV0aC8=',
  ),
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosService.interceptors.request.use(
  async request => {
    const {uniqueString} = RNUniqueId.getConstants();
    const token = await encryptedStorageService(
      `${uniqueString}_key`,
      '',
      'GET',
    );
    request.headers!.Authorization = `Api-Key ${token}`;
    return request;
  },
  error => {
    console.log('error');
    return Promise.reject(error);
  },
);

axiosService.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.response.data.detail ===
        'Authentication credentials were not provided.'
    ) {
      const {uniqueString} = RNUniqueId.getConstants();
      return authService
        .post(decrypt('a2V5L2dlbmVyYXRlLw=='), {name: uniqueString})
        .then(response => {
          encryptedStorageService(
            `${response.data.key}_key`,
            response.data.api_key,
            'SET',
          );
          console.log('new token set', response.data);

          axiosService.defaults.headers.common.Authorization = `Api-Key ${response.data.api_key}`;
          originalRequest.headers.Authorization = `Api-Key ${response.data.api_key}`;

          return axiosService(originalRequest);
        })
        .catch(err => {
          console.log('something went wrong', err);
        });
    }
  },
);

export default axiosService;
