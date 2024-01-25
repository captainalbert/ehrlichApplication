import { useAuth0 } from "@auth0/auth0-react";
import { ButtonTexts } from "../../shared/enums/contants";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      {ButtonTexts.LOGOUT}
    </button>
  );
};

export default LogoutButton;
