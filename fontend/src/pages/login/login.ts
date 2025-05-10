import { useState } from 'react';
import api from '../../config/api'; // Axios instance

export const useLogin = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = async (username: string, password: string) => {
    setIsLoggingIn(true);
    try {
      const response = await api.post('/login', { username, password });
      // Save the auth token in localStorage (or use cookies)
      localStorage.setItem('authToken', response.data.token);
      setIsLoggingIn(false);
      window.location.reload(); // Optionally reload the page
    } catch (error) {
      setIsLoggingIn(false);
      console.error('Login failed', error);
    }
  };

  return {
    login,
    isLoggingIn,
  };
};
