import React, { ReactNode } from "react";

const Button = ({
  className,
  rightIcon,
  text,
}: {
  className: string;
  text: string;
  rightIcon?: ReactNode;
}) => {
  return (
    <button
      className={`p-4 rounded-lg flex items-center justify-center gap-3 ${className}`}
    >
      {text}
      {rightIcon}
    </button>
  );
};

export default Button;
