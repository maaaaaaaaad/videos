import React from "react";
import { useContext } from "react";
import { UpdateProfile } from "../../api/user/profileUpdate";
import {
  SignUpDispatchContext,
  SignUpStateContext,
} from "../../contexts/SignUpContexts";
import { UpdateForm } from "../../types/Sign/SignUpForm.type";
import EditView from "./EditView";

const EditController = () => {
  //
  const state = useContext(SignUpStateContext);
  const dispatch = useContext(SignUpDispatchContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await UpdateProfile(state!.formInfo);
      window.location.href = "/";
    } catch (error) {
      const ERROR_MESSAGE = "The user nickname already taken";
      window.alert(`Information error: ${ERROR_MESSAGE}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    const { name, value, files } = e.currentTarget;

    dispatch!({
      type: "SET_FORM",
      formInfo: {
        ...state!.formInfo,
        [name]: files ? files[0] : value,
      },
    });
  };

  return (
    <EditView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default EditController;
