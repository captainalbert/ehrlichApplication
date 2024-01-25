import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// styles
import "./App.css";

// views
import LandingPage from "./views/LandingPage/LandingPage";
import HomePage from "./views/HomePage/HomePage";

// components
import Navbar from "./components/NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import WeatherPage from "./views/WeatherPage/WeatherPage";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log("isAuthenticated", isAuthenticated);
  return (
    // <div>
    //   <Navbar isAuthenticated={isAuthenticated} />
    //   {isAuthenticated ? <HomePage user={user} /> : <LandingPage />}
    // </div>

    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage user={user} /> : <LandingPage />}
        />
        <Route path="/weather/:location" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
