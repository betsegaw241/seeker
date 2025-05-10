// src/pages/Login.tsx
import React, { useState } from 'react';
import LoginComponent from '../../components/Login'; // Make sure Login component is imported
import { useLogin } from './login'; // Hook for managing login logic

const Login: React.FC = () => {
  // State to track login form values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Destructure login function and loading state from useLogin hook
  const { login, isLoggingIn } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('login')
    e.preventDefault();
    await login(username, password);
  };

  return (
    <LoginComponent
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={handleSubmit}
      isLoggingIn={isLoggingIn}
    />
  );
};

export default Login;
