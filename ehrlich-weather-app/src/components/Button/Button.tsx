/**
 * A button component
 *
 * @param {title} string - The title of the button
 * @param {onClick} function - The function that handles the onClick event of the button
 * @param {style} object - (Optional) additional custom styling of the button
 * @type {Component}
 */

// react
import { CSSProperties } from "react";

// styles
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
