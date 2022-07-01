import axios from 'axios';
import {encryptedStorageService} from '../utils/EncryptedStorageUtil';
import {BASEURL_DEV_ANDROID, BASEURL_DEV_IOS} from '@env';
import {decrypt} from '../utils/crypto';
import {Platform} from 'react-native';
import getUniqueId from '../native/RNUniqueId';

const axiosService = axios.create({
  baseURL: Platform.OS === 'ios' ? BASEURL_DEV_IOS : BASEURL_DEV_ANDROID,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

let id = getUniqueId();

axiosService.interceptors.request.use(
  async request => {
    if (!id) {
      id = 'fallback_key_must_change';
    }
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
      console.error(error);
      console.error('Something went wrong.');
      return Promise.reject(error);
    }

    if (
      error.response.data.detail ===
        'Authentication credentials were not provided.' &&
      error.response.status === 401
    ) {
      if (!id) {
        id = 'fallback_key_must_change';
      }
      return axiosService
        .post(decrypt('YXV0aC9rZXkvZ2VuZXJhdGUv'), {name: id})
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
