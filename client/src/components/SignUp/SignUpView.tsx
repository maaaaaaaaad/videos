import React from "react";
import { ChangeHandler } from "../../types/SignTypes/Sign.interface";

const SignUpView: React.FC<ChangeHandler> = ({
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
            placeholder="Please enter a 5 to 15 digit ID."
            autoComplete="off"
            pattern="^[A-za-z0-9]{5,15}$"
            onChange={(e) => handleChange(e)}
          />
          <div></div>
        </li>
        <li>
          <input
            type="password"
            name="pass1"
            placeholder="Password containing 8-15 special characters"
            autoComplete="off"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$"
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
            pattern="^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input
            type="text"
            name="nickname"
            placeholder="Please enter a 2-8 digit nickname."
            autoComplete="off"
            pattern="^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,8}$"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input type="submit" value="Sign up" name="signup" />
        </li>
      </form>
    </section>
  );
};

export default SignUpView;
