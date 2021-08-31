import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { search } from "../../../api/video/search";
import VideoSearchForm from "./VideoSearchForm";

const VideoSearchControllers = () => {
  //
  const history = useHistory();
  const [keyword, setKeyword] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword !== null) {
      const res = await search(keyword);

      history.push({
        pathname: "/videos",
        search: `?search=${keyword}`,
        state: res.data.result,
      });
    }
  };

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;
    setKeyword(value);
  };

  return (
    <VideoSearchForm
      handleSearch={handleSearch}
      handleKeyword={handleKeyword}
    />
  );
};

export default VideoSearchControllers;
