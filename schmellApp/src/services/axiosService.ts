import axios from 'axios';
import {encryptedStorageService} from '../utils/EncryptedStorageUtil';
import {decrypt} from '../utils/crypto';
import RNUniqueId from '../native/RNUniqueId';

const axiosService = axios.create({
  baseURL: decrypt('aHR0cHM6Ly9zY2htZWxsLXN0YWdpbmcuaGVyb2t1YXBwLmNvbS9hcGkv'),
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

export default axiosService;
