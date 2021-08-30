import axios from "axios";
import React from "react";
import { useState } from "react";
import VideoSearchForm from "./VideoSearchForm";

const VideoSearchControllers = () => {
  //
  const [keyword, setKeyword] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.get(
      `http://localhost:5000/videos/search?keyword=${keyword}`,
      {
        withCredentials: true,
      }
    );

    console.log(res.data);
  };

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword: string = e.currentTarget.value;
    setKeyword(keyword);
  };

  return (
    <VideoSearchForm
      handleSearch={handleSearch}
      handleKeyword={handleKeyword}
    />
  );
};

export default VideoSearchControllers;
