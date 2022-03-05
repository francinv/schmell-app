import axios from 'axios';

const baseURL = 'https://schmell-staging.herokuapp.com/api/';

const axiosService = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});
