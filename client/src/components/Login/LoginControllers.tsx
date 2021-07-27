import React from "react";
import LoginView from "./LoginView";

const LoginControllers = () => {
  //
  const handleSubmitBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.name);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
  };

  return (
    <LoginView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default LoginControllers;
