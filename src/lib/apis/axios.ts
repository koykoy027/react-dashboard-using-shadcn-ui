// src\lib\apis\axios.ts
import axios, { AxiosRequestConfig } from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

export const fetchWithCSRFToken = async (config: AxiosRequestConfig) => {
  await axiosInstance.get('/sanctum/csrf-cookie');
  const csrfToken = axiosInstance.defaults.headers.common['X-CSRF-TOKEN'];
  config.headers['X-CSRF-TOKEN'] = csrfToken;
  return axiosInstance(config);
};

export default axiosInstance;