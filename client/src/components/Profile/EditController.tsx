import React from "react";
import { useContext } from "react";
import { UpdateProfile } from "../../api/user/profileUpdate";
import {
  ProfileUpdateDispatchContext,
  ProfileUpdateStateContext,
} from "../../contexts/UpdateUserContext";
import EditView from "./EditView";

const EditController = () => {
  //
  const state = useContext(ProfileUpdateStateContext);
  const dispatch = useContext(ProfileUpdateDispatchContext);

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state?.formInfo.nickname === "") {
      return window.alert("Please fill data");
    }

    try {
      await UpdateProfile(state!.formInfo);
      window.location.href = "/";
    } catch (error) {
      const ERROR_MESSAGE = "The user nickname already taken";
      window.alert(`Information error: ${ERROR_MESSAGE}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch!({
      type: "EDIT_FORM",
      formInfo: {
        ...state!.formInfo,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  };

  return (
    <EditView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default EditController;
