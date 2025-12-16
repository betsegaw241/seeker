export interface LoginComponentProps {
  setConfiormPassword: React.Dispatch<React.SetStateAction<string>>;
  setName(value: string): void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  onSignup: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoggingIn: boolean;
  isSigningUp: boolean;
}
