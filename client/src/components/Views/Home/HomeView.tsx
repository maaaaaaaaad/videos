import React, { useContext } from "react";
import { ResUserDataContext } from "../../../App";

const HomeView = () => {
  const isUser = useContext(ResUserDataContext);

  return (
    <section>
      <img
        src={
          isUser?.avatarUrl
            ? `${process.env.REACT_APP_SERVER_URL}/${isUser.avatarUrl}`
            : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
        }
        alt="avatar"
        width={60}
        height={50}
      />

      <span>Hello {isUser?.nickname ? isUser.nickname : "User"}</span>
    </section>
  );
};

export default HomeView;
