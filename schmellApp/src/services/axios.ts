import axios from 'axios';
import {encryptedStorageService} from '../utils/EncryptedStorageUtil';
import DeviceInfo from 'react-native-device-info';
import {BASEURL_DEV} from '@env';
import {decrypt} from '../utils/crypto';

const axiosService = axios.create({
  baseURL: BASEURL_DEV,
  headers: {
    'Content-Type': 'application/json',
  },
});

const id = DeviceInfo.getUniqueId();

axiosService.interceptors.request.use(
  async request => {
    const token = await encryptedStorageService(`${id}_key`, '', 'GET');
    request!.headers!.Authorization = `Api-Key ${token}`;
    return request;
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
      error.response.data.detail ===
        'Authentication credentials were not provided.' &&
      error.response.status === 401
    ) {
      return axiosService
        .post(decrypt('YXV0aC9nZW5lcmF0ZV9rZXkv'), {name: id})
        .then(response => {
          encryptedStorageService(`${id}_key`, response.data.api_key, 'SET');
          axiosService.defaults.headers.common.Authorization =
            'Api-Key ' + response.data.api_key;
          originalRequest.headers.Authorization =
            'Api-Key ' + response.data.api_key;

          return axiosService(originalRequest);
        })
        .catch(err => {
          if (
            err.response.status === 400 &&
            err.response.data.error === 'API Key already exists'
          ) {
            return;
          }
        });
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  },
);

export default axiosService;
