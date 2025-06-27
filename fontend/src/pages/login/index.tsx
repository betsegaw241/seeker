// src/pages/Login.tsx
import React, { useState } from 'react';
import LoginComponent from '../../components/Login';
import { useLogin } from './login';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { login, isLoggingIn, signup, isSigningUp } = useLogin();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const success = await login(email, password);
    if (success) {
      navigate('/profile');
    }
  };
  const handSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <LoginComponent
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      // onSubmit={handleSubmit}
      onLogin={handleLogin}
      onSignup={handSignUp}
      isLoggingIn={isLoggingIn}
      isSigningUp={isSigningUp}
    />
  );
};

export default Login;
