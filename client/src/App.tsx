import React from "react";
import { BrowserRouter } from "react-router-dom";
import MediaQuery from "./MediaQuery";
import Navigators from "./navigators/Navigators";
import Routers from "./routes/Routers";

const App = () => {
  return (
    <MediaQuery>
      <BrowserRouter>
        <Navigators />
        <Routers />
      </BrowserRouter>
    </MediaQuery>
  );
};

export default App;
