import React from "react";
import { useContext } from "react";
import { ResUserDataContext } from "../App";

const Home = () => {
  //
  const isUser = useContext(ResUserDataContext);

  return (
    <section>
      <img
        src={
          isUser?.avatarUrl
            ? `http://localhost:5000/${isUser.avatarUrl}`
            : "http://localhost:5000/assets/images/defaultImg.png"
        }
        alt="avatar"
        width={50}
        height={50}
      />

      <span>Hello {isUser?.nickname ? isUser.nickname : "User"}</span>
    </section>
  );
};

export default Home;
