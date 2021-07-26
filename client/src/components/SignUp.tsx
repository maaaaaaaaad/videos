import React from "react";

const SignUp = () => {
  return (
    <section>
      <form>
        <li>
          <input type="text" name="id" placeholder="ID" autoComplete="off" />
        </li>
        <li>
          <input
            type="password"
            name="pass1"
            placeholder="Password"
            autoComplete="off"
          />
        </li>
        <li>
          <input
            type="password"
            name="pass2"
            placeholder="Confirm password"
            autoComplete="off"
          />
        </li>
        <li>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
        </li>
        <li>
          <input
            type="text"
            name="nick"
            placeholder="Nickname"
            autoComplete="off"
          />
        </li>
        <li>
          <input type="submit" value="Sign up" />
        </li>
      </form>
    </section>
  );
};

export default SignUp;
