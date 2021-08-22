import React from "react";
import { SignUpHandler } from "../../types/Sign/Sign.interface";

const SignUpView: React.FC<SignUpHandler> = ({
  handleChange,
  handleSubmitBtn,
  handleSendEmail,
  handleEmailKey,
  handleSignEmail,
  checkId,
  loadingSpanner,
  emailKey,
  okEmail,
}) => {
  return (
    <section>
      <form
        method="POST"
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmitBtn(e)}
      >
        <li>
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input
            type="text"
            required
            name="userId"
            placeholder="Please enter a 5 to 15 digit ID."
            autoComplete="off"
            pattern="^[A-za-z0-9]{5,15}$"
            onChange={(e) => handleChange(e)}
          />
          <span>{checkId}</span>
        </li>
        <li>
          <input
            type="password"
            required
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
            required
            name="pass2"
            placeholder="Confirm password"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li>
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            autoComplete="off"
            pattern="^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$"
            onChange={(e) => handleChange(e)}
          />
          {loadingSpanner ? (
            "Loading...🕐"
          ) : (
            <>
              {emailKey ? (
                <span>
                  <input
                    type="text"
                    placeholder="Enter you email key"
                    autoComplete="off"
                    onChange={(e) => handleEmailKey(e)}
                  />
                  <button onClick={(e) => handleSignEmail(e)}>
                    Sign Email
                  </button>
                </span>
              ) : (
                <>
                  {okEmail ? (
                    <span>OK</span>
                  ) : (
                    <button onClick={(e) => handleSendEmail(e)}>
                      Send Email
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </li>
        <li>
          <input
            type="text"
            required
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
