/**
 * A component used for web app's navigation bar.
 *
 * @param {isAuthenticated} boolean - The value used to show logout button.
 * @type {Component}
 * @returns {NavBar Component}
 */

// packege
import { useAuth0 } from "@auth0/auth0-react";

// styles
import "./NavBar.css";

// component
import LogoutButton from "../Button/Button";

// constants
import { ButtonTexts, Titles } from "../../shared/enums/contants";

interface NavbarProps {
  isAuthenticated: boolean;
}

const Navbar = ({ isAuthenticated }: NavbarProps) => {
  const { logout } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
          {Titles.WEATHER_FORECAST}
        </a>

        {isAuthenticated && (
          <div className={`navbar-links`}>
            <LogoutButton onClick={() => logout()} title={ButtonTexts.LOGOUT} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
