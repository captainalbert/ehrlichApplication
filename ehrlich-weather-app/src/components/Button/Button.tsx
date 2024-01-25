// styles
import "./Button.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick} className={"login-button"}>
      <p>{title}</p>
    </div>
  );
};

export default Button;
