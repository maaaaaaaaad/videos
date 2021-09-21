import React from "react";
import { SearchHandlers } from "../../../types/search/handlers.interface";

const VideoSearchForm: React.FC<SearchHandlers> = ({
  handleKeyword,
  handleSearch,
}) => {
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input
        className="border-2 border-gray-400 outline-none"
        type="text"
        name="keyword"
        placeholder="...Search"
        autoComplete="off"
        onChange={(e) => handleKeyword(e)}
      />
      <input
        className="p-1 cursor-pointer outline-none"
        type="submit"
        value="Q"
      />
    </form>
  );
};

export default VideoSearchForm;
