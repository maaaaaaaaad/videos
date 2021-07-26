import React from "react";
import { Route } from "react-router-dom";
import Books from "../components/Books";
import Home from "../components/Home";
import Login from "../components/Login";
import Notes from "../components/Notes";
import SignUp from "../components/SignUp";
import Videos from "../components/Videos";

const Routers = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/videos" exact component={Videos} />
      <Route path="/books" exact component={Books} />
      <Route path="/notes" exact component={Notes} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
    </React.Fragment>
  );
};

export default Routers;
