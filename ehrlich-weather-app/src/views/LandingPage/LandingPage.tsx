import "./LandingPage.css";
import Button from "../../components/Button/Button";

const LandingPage = () => {
  const handleLogin = () => {
    console.log("user tried to login");
  };

  return (
    <div className="welcome">
      <h5>
        Welcome to the weather forecast web application. Please login with your
        GitHub user to use the application and view the weather in your city
      </h5>
      <Button className="loginButton" title="Login" onClick={handleLogin} />
    </div>
  );
};

export default LandingPage;
