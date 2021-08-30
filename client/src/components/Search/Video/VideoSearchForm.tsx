import React from "react";
import { SearchHandlers } from "../../../types/search/handlers.interface";

const VideoSearchForm: React.FC<SearchHandlers> = ({
  handleKeyword,
  handleSearch,
}) => {
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        name="keyword"
        placeholder="...Search"
        autoComplete="off"
        onChange={(e) => handleKeyword(e)}
      />
      <input type="submit" value="Q" />
    </form>
  );
};

export default VideoSearchForm;
