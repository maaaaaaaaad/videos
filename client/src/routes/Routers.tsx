import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home/Home";
import AccountForm from "../components/SignForm/AccountForm";
import SignUpPage from "../components/SignUpPage/SignUpPage";

const Routers = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={AccountForm} />
      <Route path="/signup" component={SignUpPage} />
    </React.Fragment>
  );
};

export default Routers;
