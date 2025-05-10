import { useState } from 'react';
import api from '../../config/api'; // Axios instance

export const useLogin = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoggingIn(true);
    try {
      const response = await api.post('/users/login', { email, password });
      localStorage.setItem('authToken', response.data.token);
      setIsLoggingIn(false);
      window.location.reload();
    } catch (error) {
      console.log(error)
      setIsLoggingIn(false);
      console.error('Login failed', error);
    }
  };

  return {
    login,
    isLoggingIn,
  };
};
