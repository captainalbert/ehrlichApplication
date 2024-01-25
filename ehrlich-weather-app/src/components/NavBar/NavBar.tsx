/**
 * This component is used for navigation bar of the website.
 *
 * @argument isAuthenticated - boolean
 * @author Albert John Tulop
 */
import React from "react";

// styles
import "./NavBar.css";
import LogoutButton from "../Button/LogoutButton";

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          Weather App
        </a>

        {/* Logout element */}
        {isAuthenticated && (
          <div className={`navbar-links`}>
            <LogoutButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
