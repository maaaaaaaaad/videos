import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ResUserDataContext } from "../App";

const Navigators = () => {
  //
  const isUser = useContext(ResUserDataContext);

  return (
    <section>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          {isUser ? (
            <Link to={`/profile/${isUser._id}`}>
              {isUser.nickname}'s profile
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>
          {isUser ? (
            <Link to={`/upload/${isUser._id}`}>Upload</Link>
          ) : (
            <Link to="/signup">SignUp</Link>
          )}
        </li>
      </ul>
    </section>
  );
};

export default Navigators;
