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
import { Titles } from "../../shared/enums/contants";

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          {Titles.WEATHER_FORECAST}
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
