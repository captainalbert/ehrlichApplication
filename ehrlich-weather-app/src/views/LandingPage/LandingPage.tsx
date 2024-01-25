import "./LandingPage.css";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

const LandingPage = () => {
  const handleLogin = () => {
    console.log("user tried to login");
  };

  return (
    <div className="welcome">
      <Title
        title="Welcome to the weather forecast web application. Please login with your
        GitHub user to use the application and view the weather in your city"
      />
      <Button className="loginButton" title="Login" onClick={handleLogin} />
    </div>
  );
};

export default LandingPage;
