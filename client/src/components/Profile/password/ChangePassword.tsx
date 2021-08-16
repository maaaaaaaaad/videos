import React from "react";
import { useContext } from "react";
import { ChangePass } from "../../../api/user/changePass";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "../../../contexts/SignUpContexts";
import { ChangePasswordForm } from "../../../types/Sign/SignUpForm.type";

const ChangePassword = () => {
  //
  const state = useContext(SignUpStateContext);
  const dispatch = useContext(SignUpDispatchContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("pass1", (state?.formInfo! as ChangePasswordForm).pass1);
      formData.append("pass2,", (state?.formInfo! as ChangePasswordForm).pass2);

      const res = await ChangePass(formData);

      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    const { name, value } = e.currentTarget;

    dispatch!({
      type: "SET_FORM",
      formInfo: {
        ...state!.formInfo,
        [name]: value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmitBtn}>
      <input
        name="pass1"
        type="pass1"
        placeholder="New password"
        onChange={handleChange}
      />
      <input
        name="pass2"
        type="pass2"
        placeholder="Confirm password"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default ChangePassword;
