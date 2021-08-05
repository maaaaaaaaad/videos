import React from "react";
import EditView from "./EditView";

const EditController = () => {
  //

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  const handleSubmitBtn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <EditView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default EditController;
