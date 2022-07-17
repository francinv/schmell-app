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
    const {uniqueString} = RNUniqueId.getConstants();
    const token = await encryptedStorageService(
      `${uniqueString}_key`,
      '',
      'GET',
    );
    request!.headers!.Authorization = `Api-Key ${token}`;
    return request;
  },
  error => {
    console.log('error');
    return Promise.reject(error);
  },
);

export default axiosService;
