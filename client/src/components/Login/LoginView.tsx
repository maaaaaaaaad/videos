import React from "react";
import { ChangeHandler } from "../../types/SignTypes/Sign.interface";

const LoginView: React.FC<ChangeHandler> = ({
  handleChange,
  handleSubmitBtn,
}) => {
  return (
    <section>
      <form onSubmit={(e) => handleSubmitBtn(e)}>
        <li>
          <input
            type="text"
            name="id"
            placeholder="Enter your ID"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
        </li>
        <li>
          <input
            type="password"
            name="pass"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
        </li>

        <li>
          <input type="submit" name="submit" value="SIGN IN" />
        </li>
      </form>
    </section>
  );
};

export default LoginView;
