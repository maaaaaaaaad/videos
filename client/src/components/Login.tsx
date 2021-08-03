import React from "react";
import LoginContext from "../contexts/LoginContext";
import LoginControllers from "./Login/LoginControllers";

const Login = () => {
  return (
    <LoginContext>
      <LoginControllers />
    </LoginContext>
  );
};

export default Login;
