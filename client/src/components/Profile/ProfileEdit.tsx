import React from "react";
import { useContext } from "react";
import { ResUserDataContext } from "../../App";
import EditController from "./EditController";

const ProfileEdit = () => {
  const isUser = useContext(ResUserDataContext);
  return <>{isUser?._id ? <EditController /> : "Please Login"}</>;
};

export default ProfileEdit;
