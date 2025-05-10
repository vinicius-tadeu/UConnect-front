import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor?: string;
  textColor?: string;
};

export default function Button({
  children,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${bgColor} ${textColor} font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
