// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token from localStorage to every request if present
  // api.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem('authToken');
  //     if (token && config.headers) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

export default api;
