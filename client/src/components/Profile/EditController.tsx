import React from "react";
import EditView from "./EditView";

const EditController = () => {
  //

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  const handleSubmitBtn = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <EditView handleChange={handleChange} handleSubmitBtn={handleSubmitBtn} />
  );
};

export default EditController;
