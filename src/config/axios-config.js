/**
 * axios配置
 */
import axios from 'axios';

axios.defaults.baseURL = process.env.VITE_API_BASE_URL;

axios.interceptors.request.use()
