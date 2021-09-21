import React, { useContext } from "react";
import { ResUserDataContext } from "../../../App";

const HomeView = () => {
  const isUser = useContext(ResUserDataContext);

  return (
    <section className="flex items-center">
      <img
        className="mr-1 w-14 h-14 rounded-md"
        src={
          isUser?.avatarUrl
            ? `${process.env.REACT_APP_SERVER_URL}/${isUser.avatarUrl}`
            : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
        }
        alt="avatar"
      />
      <span>Hello {isUser?.nickname ? isUser.nickname : "User"}</span>
    </section>
  );
};

export default HomeView;
