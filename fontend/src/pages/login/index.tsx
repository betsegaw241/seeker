// src/pages/Login.tsx
import React, { useState } from 'react';
import LoginComponent from '../../components/Login'; // Make sure Login component is imported
import { useLogin } from './login'; // Hook for managing login logic

const Login: React.FC = () => {
  // State to track login form values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Destructure login function and loading state from useLogin hook
  const { login, isLoggingIn } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('login')
    console.log(email,password)
    e.preventDefault();

    await login(email, password);
  };

  return (
    <LoginComponent
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      onSubmit={handleSubmit}
      isLoggingIn={isLoggingIn}
    />
  );
};

export default Login;
