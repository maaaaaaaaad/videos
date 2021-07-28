import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SignInStateContext } from "../components/Login/LoginContexts/LoginContext";

const Navigators = () => {
  const loginState = useContext(SignInStateContext);
  const userOnState: boolean = loginState!.userSignInToggle.toggle;

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
        <li>{userOnState ? "Profile" : <Link to="/login">Login</Link>}</li>
        <li>{userOnState ? "Logout" : <Link to="/signup">SignUp</Link>}</li>
      </ul>
    </section>
  );
};

export default Navigators;
