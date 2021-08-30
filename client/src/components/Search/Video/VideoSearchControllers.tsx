import React from "react";
import VideoSearchForm from "./VideoSearchForm";

const VideoSearchControllers = () => {
  //
  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword: string = e.currentTarget.value;
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <VideoSearchForm
      handleKeyword={handleKeyword}
      handleSearch={handleSearch}
    />
  );
};

export default VideoSearchControllers;
