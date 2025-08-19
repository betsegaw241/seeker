import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void; // only allow your own onClick
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-800 text-white hover:bg-blue-700",
  secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "secondary",
  className = "",
  children,
  onClick,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      className={`px-4 py-2 rounded text-center transition duration-200 cursor-pointer ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
