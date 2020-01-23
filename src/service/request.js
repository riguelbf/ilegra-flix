import axios from 'axios';
import { BASE_URL_MOVIES } from '../config';

const request = axios.create({
  baseURL: BASE_URL_MOVIES,
});

export default request;
