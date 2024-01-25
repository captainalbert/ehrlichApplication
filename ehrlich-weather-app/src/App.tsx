// package imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// style imports
import "./App.css";

// views imports
import LandingPage from "./views/LandingPage/LandingPage";
import HomePage from "./views/HomePage/HomePage";

// components imports
import Navbar from "./components/NavBar/NavBar";
import WeatherPage from "./views/WeatherPage/WeatherPage";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0(); // destructure needed states from useAuth0()

  // Show loading as long as isLoading is true
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage user={user} /> : <LandingPage />} // Redirection logic: If user is authenticated, go to HomePage. If not, LandingPage.
        />
        <Route path="/weather/:location" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
