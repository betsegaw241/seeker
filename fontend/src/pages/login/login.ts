import { useState } from 'react';
import api from '../../config/api'; // Axios instance

export const useLogin = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const login = async (email: string, password: string) => {
    setIsLoggingIn(true);
    try {
      const response = await api.post('/users/login', { email, password });
      localStorage.setItem('authToken', response.data.token);
      setIsLoggingIn(false);
      return true; 
    } catch (error) {
      console.log(error);
      setErrorMsg('Invalid email or password');
      setIsLoggingIn(false);
      return false; 
    }
  };
  const signup = async (email: string, password: string) => {
    setIsSigningUp(true); // Or rename to setIsSigningUp if you want clarity

    try {
      const response = await api.post('/users', {
        email,
        password,
      });
      localStorage.setItem('authToken', response.data.token);
      setIsSigningUp(false);
      window.location.reload(); // Or redirect user to a dashboard or login page
    } catch (error) {
      console.error('Signup failed:', error);
      setIsSigningUp(false);
    }
  };

  return {
    login,
    isLoggingIn,
    signup,
    isSigningUp,
    errorMsg,
  };
};
