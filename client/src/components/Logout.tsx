import React from "react";
import { useContext } from "react";
import { ResUserDataContext } from "../App";

const Logout = () => {
  const isUser = useContext(ResUserDataContext);

  return <section>Logout {isUser?.nickname}</section>;
};

export default Logout;
