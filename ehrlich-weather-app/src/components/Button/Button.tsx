// styles
import { CSSProperties } from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
  style?: CSSProperties;
}

const Button = ({ title, onClick, style }: ButtonProps) => {
  return (
    <button onClick={onClick} className={"login-button"} style={style}>
      <p>{title}</p>
    </button>
  );
};

export default Button;
