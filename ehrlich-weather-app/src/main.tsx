// react imports
import React from "react";

// package imports
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

// style imports
import "./index.css";

// components imports
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-0pttj0dkc07rpfa4.us.auth0.com"
      clientId="H6eDaJZSkFfO4WmoUJaoWG0Gr72iVLQ8"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
