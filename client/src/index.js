import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MovieProvider } from "./Components/Context/MovieContext";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./Components/Context/UserContext";
require("dotenv").config({ path: "../.env" });
const { REACT_APP_CLIENT_ID } = process.env;

ReactDOM.render(
  <Auth0Provider
    domain="dev-fvctg4qu.us.auth0.com"
    clientId={REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
      <UserProvider>
    <MovieProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </MovieProvider>
      </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
