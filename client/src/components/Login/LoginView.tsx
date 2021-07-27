import React from "react";

const LoginView = () => {
  return (
    <section>
      <form>
        <li>
          <input type="text" name="id" placeholder="Enter your ID" />
        </li>
        <li>
          <input type="password" name="password" placeholder="Password" />
        </li>
        <li>
          <input type="submit" name="submit" value="SIGN IN" />
        </li>
      </form>
    </section>
  );
};

export default LoginView;
