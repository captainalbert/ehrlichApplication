import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <Navbar isAuthenticated />
      <LandingPage />
    </div>
  );
}

export default App;
