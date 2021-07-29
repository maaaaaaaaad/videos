import React, { useContext } from "react";
import { SignInStateContext } from "./Login/LoginContexts/LoginContext";

const Home = () => {
  const loginState = useContext(SignInStateContext);
  const userOnState: boolean = loginState!.userSignInToggle.toggle;

  console.log(loginState?.userSignInToggle);

  return (
    <section>
      {userOnState ? `Hello ${loginState?.userSignInToggle.nickname}` : "Home"}
    </section>
  );
};

export default Home;
