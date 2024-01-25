// styles
import "./LandingPage.css";

import Title from "../../components/Title/Title";
import LoginButton from "../../components/Button/LoginButton";

const LandingPage = () => {
  return (
    <div className="welcome">
      <Title
        title="Welcome to the weather forecast web application. Please login with your
        GitHub user to use the application and view the weather in your city"
      />
      <LoginButton />
    </div>
  );
};

export default LandingPage;
