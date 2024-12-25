/**
 * axios配置
 */
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

axios.interceptors.request.use(config => {

    return config;
}, error => {
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {

    return response;
}, error => {
    return Promise.reject(error);
})

export default axios;
