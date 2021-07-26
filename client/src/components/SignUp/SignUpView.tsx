import React from "react";
import { ChangeHandler } from "./SignUpTypes/SignUp.interface";

const SignUpView: React.FC<ChangeHandler> = ({ handleChange }) => {
  return (
    <section>
      <form>
        <li>
          <input
            type="text"
            name="id"
            placeholder="ID"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input
            type="password"
            name="pass1"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input
            type="password"
            name="pass2"
            placeholder="Confirm password"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input
            type="text"
            name="nickname"
            placeholder="Nickname"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input type="submit" value="Sign up" />
        </li>
      </form>
    </section>
  );
};

export default SignUpView;
