import axios from 'axios';
import { serverUrl } from './config';
const instanceAxios = axios.create({
    baseURL: serverUrl,
    timeout: 3000,
    headers: {
    },
});
export const get = (url, params={}) => instanceAxios.get(url, {params});