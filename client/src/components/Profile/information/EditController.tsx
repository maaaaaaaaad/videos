import React from "react";
import { useContext } from "react";
import { usersApiContext } from "../../../api/user/UserApi";
import { ResUserDataContext } from "../../../App";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "../../../contexts/SignUpContexts";
import { UpdateForm } from "../../../types/sign/SignUpForm.type";
import EditView from "./EditForm";

const EditController = () => {
  //
  const api = useContext(usersApiContext);
  const state = useContext(SignUpStateContext);
  const dispatch = useContext(SignUpDispatchContext);
  const isUser = useContext(ResUserDataContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", (state?.formInfo as UpdateForm).email);
    formData.append("nickname", (state?.formInfo as UpdateForm).nickname);

    (state?.formInfo as UpdateForm).avatar &&
      formData.append("avatar", (state!.formInfo as UpdateForm).avatar!);

    try {
      const res = await api.update(formData);
      console.log(res.data);
      window.location.href = "/";
    } catch (error) {
      //
      const ERROR_MESSAGE = "The user email or nickname already taken";
      window.alert(`Information error: ${ERROR_MESSAGE}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    const { name, value, files } = e.currentTarget;

    dispatch!({
      type: "SET_UPDATE_FORM",
      formInfo: {
        ...(state!.formInfo! as UpdateForm),
        nickname: isUser!.nickname!,
        email: isUser!.email!,
        [name]: files ? files[0] : value,
      },
    });
  };

  return (
    <EditView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default EditController;
