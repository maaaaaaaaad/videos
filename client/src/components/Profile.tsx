import React from "react";
import { useContext } from "react";
import { ResUserDataContext } from "../App";

const Profile = () => {
  const isUser = useContext(ResUserDataContext);

  return <section>Profile {isUser?.nickname}</section>;
};

export default Profile;
