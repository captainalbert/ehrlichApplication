import { useAuth0 } from "@auth0/auth0-react";

import "./Button.css";
import { ButtonTexts } from "../../shared/enums/contants";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="login-button" onClick={() => loginWithRedirect()}>
      {ButtonTexts.LOGIN}
    </button>
  );
};

export default LoginButton;
