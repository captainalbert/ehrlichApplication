// styles
import "./App.css";

// views
import LandingPage from "./views/LandingPage/LandingPage";

// components
import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Navbar isAuthenticated />
      <LandingPage />
    </div>
  );
}

export default App;
