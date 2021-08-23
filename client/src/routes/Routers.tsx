import React from "react";
import { Route } from "react-router-dom";
import Books from "../components/Books";
import Home from "../components/Home";
import Login from "../components/Login";
import Notes from "../components/Notes";
import Profile from "../components/Profile";
import ProfileEdit from "../components/Profile/information/ProfileEdit";
import ChangePassword from "../components/Profile/password/ChangePassword";

import SignUp from "../components/SignUp";
import Upload from "../components/Upload";
import UploadBook from "../components/Upload/UploadBook";
import UploadNote from "../components/Upload/UploadNote";
import UploadVideo from "../components/Upload/UploadVideo";
import Videos from "../components/Videos";
import SignUpContexts from "../contexts/SignUpContexts";

const Routers = () => {
  //

  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/videos" exact component={Videos} />
      <Route path="/books" exact component={Books} />
      <Route path="/notes" exact component={Notes} />

      <SignUpContexts>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />

        <Route path="/profile/:id" exact component={Profile} />
        <Route path="/profile/:id/edit" exact component={ProfileEdit} />
        <Route
          path="/profile/:id/change-password"
          exact
          component={ChangePassword}
        />
      </SignUpContexts>

      <Route path="/upload/:id" exact component={Upload} />
      <Route path="/upload/:id/video" exact component={UploadVideo} />
      <Route path="/upload/:id/book" exact component={UploadBook} />
      <Route path="/upload/:id/note" exact component={UploadNote} />
    </React.Fragment>
  );
};

export default Routers;
