import React from "react";
import { BrowserRouter } from "react-router-dom";
import MediaQuery from "./MediaQuery";
import Routers from "./routes/Routers";

const App = () => {
  return (
    <MediaQuery>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </MediaQuery>
  );
};

export default App;
