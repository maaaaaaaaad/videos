import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginContext from "./contexts/LoginContext";

ReactDOM.render(
  <React.StrictMode>
    <LoginContext>
      <App />
    </LoginContext>
  </React.StrictMode>,
  document.getElementById("root")
);
