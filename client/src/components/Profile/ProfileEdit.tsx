import React from "react";
import { useContext } from "react";
import { ResUserDataContext } from "../../App";
import UpdateUserContext from "../../contexts/UpdateUserContext";
import EditController from "./EditController";

const ProfileEdit = () => {
  const isUser = useContext(ResUserDataContext);
  return (
    <>
      {isUser?._id ? (
        <UpdateUserContext>
          <EditController />
        </UpdateUserContext>
      ) : (
        "Please Login"
      )}
    </>
  );
};

export default ProfileEdit;
