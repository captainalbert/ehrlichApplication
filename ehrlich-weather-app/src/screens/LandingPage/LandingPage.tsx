// LandingPage screen of the web

// package
import { useAuth0 } from "@auth0/auth0-react";

// style
import "./LandingPage.css";

// components
import Title from "../../components/Title/Title";
import LoginButton from "../../components/Button/Button";

// shared
import { ButtonTexts, Titles } from "../../shared/enums/contants";

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="welcome">
      <Title title={Titles.WELCOME} />
      <LoginButton
        onClick={() => loginWithRedirect()} // built-in login function in useAuth that allows redirect right login click
        title={ButtonTexts.LOGIN}
        // style={{ marginLeft: 40 }}
      />
    </div>
  );
};

export default LandingPage;
