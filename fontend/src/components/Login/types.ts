// src/components/Login/types.ts (or wherever you define your types)

export interface LoginComponentProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoggingIn: boolean;
  }
  