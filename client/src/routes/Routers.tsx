import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Routers = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </React.Fragment>
  );
};

export default Routers;
