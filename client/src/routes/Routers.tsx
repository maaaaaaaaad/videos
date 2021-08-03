import React from "react";
import { Route } from "react-router-dom";
import Books from "../components/Books";
import Home from "../components/Home";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Notes from "../components/Notes";
import Profile from "../components/Profile";
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
      <Route path="/profile" exact component={Profile} />
      <Route path="/logout" exact component={Logout} />
    </React.Fragment>
  );
};

export default Routers;
