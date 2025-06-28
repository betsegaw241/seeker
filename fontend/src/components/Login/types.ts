// src/components/Login/types.ts (or wherever you define your types)

export interface LoginComponentProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
    onSignup: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoggingIn: boolean;
    isSigningUp: boolean;
    
  }
  