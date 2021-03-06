import React from "react";
import { useContext } from "react";
import { usersApiContext } from "../../../api/user/UserApi";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "../../../contexts/SignUpContexts";
import { ChangePasswordForm } from "../../../types/sign/SignUpForm.type";

const ChangePassword = () => {
  //
  const api = useContext(usersApiContext);
  const state = useContext(SignUpStateContext);
  const dispatch = useContext(SignUpDispatchContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state?.formInfo as ChangePasswordForm) {
      try {
        const password = state!.formInfo as ChangePasswordForm;

        if (
          password.pass1 !== password.pass2 ||
          (password.pass1 === "" && password.pass2 === "")
        ) {
          return;
        }

        const res = await api.changePass(password);
        console.log(res.data);
        window.location.href = "/login";
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    const { name, value } = e.currentTarget;

    dispatch!({
      type: "SET_CHANGE_PASSWORD",
      formInfo: {
        ...(state!.formInfo! as ChangePasswordForm),
        [name]: value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmitBtn}>
      <input
        name="pass1"
        type="password"
        placeholder="New password"
        autoComplete="off"
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$"
        onChange={handleChange}
      />
      <input
        name="pass2"
        type="password"
        placeholder="Confirm password"
        autoComplete="off"
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$"
        onChange={handleChange}
      />
      <input type="submit" value="Save Change" />
    </form>
  );
};

export default ChangePassword;
