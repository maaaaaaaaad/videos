import React from "react";
import { createContext } from "react";

const MOBILE_SIZE = "480px";
const MediaQueryContext = createContext(MOBILE_SIZE);

const MediaQuery: React.FC = ({ children }) => {
  return (
    <MediaQueryContext.Provider value={MOBILE_SIZE}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export default MediaQuery;
