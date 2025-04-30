import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode; // 👈 Accept children here
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  success: 'bg-green-600 text-white hover:bg-green-700',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-100 text-center px-4 py-2 rounded transition duration-200 ${
        variantClasses[variant]
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </div>
  );
};
