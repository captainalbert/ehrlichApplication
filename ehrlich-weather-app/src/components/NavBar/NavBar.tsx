/**
 * A component used for web app's navigation bar.
 *
 * @param {isAuthenticated} boolean - The value used to show logout button.
 * @type {Component}
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
          <i
            className="fas fa-cloud"
            style={{ marginLeft: 10, marginRight: 10 }}
          />
          {Titles.WEATHER_FORECAST}
        </a>

        {isAuthenticated && (
          <div className={`navbar-logout`}>
            <LogoutButton onClick={() => logout()} title={ButtonTexts.LOGOUT} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
