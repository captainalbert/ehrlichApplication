// styles
import "./LandingPage.css";

import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import LoginButton from "../../components/LoginButton/LoginButton";

const LandingPage = () => {
  // This function is responsible for handling login.
  const handleLogin = () => {
    console.log("user tried to login");
  };

  return (
    <div className="welcome">
      <Title
        title="Welcome to the weather forecast web application. Please login with your
        GitHub user to use the application and view the weather in your city"
      />
      {/* <Button title="Login" onClick={handleLogin} /> */}
      <LoginButton />
    </div>
  );
};

export default LandingPage;
