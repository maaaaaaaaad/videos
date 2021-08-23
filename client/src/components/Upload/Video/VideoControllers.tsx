import React from "react";
import VideoForm from "./VideoForm";

const VideoControllers = () => {
  const handleSubmitBtn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.currentTarget.value);
  };

  const handleSelectedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <VideoForm
      handleSelectedChange={handleSelectedChange}
      handleChange={handleChange}
      handleSubmitBtn={handleSubmitBtn}
      handleChangeTextArea={handleChangeTextArea}
    />
  );
};

export default VideoControllers;
