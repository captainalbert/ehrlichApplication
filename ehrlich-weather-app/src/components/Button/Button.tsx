import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className: string;
}

const Button = ({ className, title, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick} className={className}>
      <p>{title}</p>
    </div>
  );
};

export default Button;
