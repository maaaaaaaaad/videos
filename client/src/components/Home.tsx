import React from "react";
import { useContext } from "react";
import { ResUserDataContext } from "../App";

const Home = () => {
  const isUser = useContext(ResUserDataContext);

  return (
    <section>
      {isUser?.avatarUrl && (
        <img
          src={`http://localhost:5000/${isUser!.avatarUrl}`}
          alt="avatar"
          width={50}
          height={50}
        />
      )}
      <span>Hello {isUser?.nickname}</span>
    </section>
  );
};

export default Home;
