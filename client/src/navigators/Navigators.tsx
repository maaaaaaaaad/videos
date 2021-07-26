import React from "react";
import { Link } from "react-router-dom";

const Navigators = () => {
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
          {/*Toogle /login or /profile*/}
          <Link to="/login">Login|Profile</Link>
        </li>
        <li>
          {/*Toogle /signup or /logout*/}
          <Link to="/signup">SignUp|Logout</Link>
        </li>
      </ul>
    </section>
  );
};

export default Navigators;
