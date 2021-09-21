import React from "react";
import { SearchHandlers } from "../../../types/search/handlers.interface";

const VideoSearchForm: React.FC<SearchHandlers> = ({
  handleKeyword,
  handleSearch,
}) => {
  return (
    <form className="mb-5" onSubmit={(e) => handleSearch(e)}>
      <input
        className="border-b-2 w-72 border-gray-400 outline-none mr-1"
        type="text"
        name="keyword"
        placeholder="...Search"
        autoComplete="off"
        onChange={(e) => handleKeyword(e)}
      />
      <input
        className="p-1 w-8 rounded-md bg-black text-white cursor-pointer outline-none"
        type="submit"
        value="Q"
      />
    </form>
  );
};

export default VideoSearchForm;
