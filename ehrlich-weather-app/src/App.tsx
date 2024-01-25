// styles
import "./App.css";

// views
import LandingPage from "./views/LandingPage/LandingPage";

// components
import Navbar from "./components/NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import HomePage from "./views/HomePage/HomePage";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log("isAuthenticated", isAuthenticated);
  return (
    <div>
      <Navbar isAuthenticated />
      {isAuthenticated ? <HomePage user={user} /> : <LandingPage />}
    </div>
  );
}

export default App;
