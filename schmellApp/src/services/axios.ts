import axios from 'axios';
import {encryptedStorageService} from '../utils/EncryptedStorageUtil';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {decrypt} from '../utils/crypto';
import RNUniqueId from '../native/RNUniqueId';

const axiosService = axios.create({
  baseURL: 'https://schmell-staging.herokuapp.com/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosService.interceptors.request.use(
  async request => {
    RNUniqueId.getUniqueString(async (result: string) => {
      const token = await encryptedStorageService(`${result}_key`, '', 'GET');
      request!.headers!.Authorization = `Api-Key ${token}`;
      return request;
    });
  },
  error => {
    console.log('error');
    return Promise.reject(error);
  },
);

export default axiosService;
