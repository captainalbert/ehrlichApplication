/**
 * This component is used for navigation bar of the website.
 *
 * @argument isAuthenticated - boolean
 * @author Albert John Tulop
 */
import React, { useState } from "react";

// styles
import "./NavBar.css";
import LogoutButton from "../LoginButton/LogoutButton";

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = true }) => {
  // State for showing navigationBar
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  // Function to toggle the navbar state
  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          Weather App
        </a>

        {/* Hamburger menu for mobile view */}
        <div className="navbar-toggle" onClick={toggleNavbar}>
          ☰
        </div>

        {/* Logout element */}
        {isAuthenticated && (
          <div className={`navbar-links ${isNavbarOpen ? "open" : ""}`}>
            {/* <a href="/" className="navbar-link" onClick={toggleNavbar}>
              logout
            </a> */}
            <LogoutButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
