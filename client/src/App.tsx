import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginContext from "./components/Login/LoginContexts/LoginContext";
import MediaQuery from "./MediaQuery";
import Navigators from "./navigators/Navigators";
import Routers from "./routes/Routers";

const App = () => {
  return (
    <MediaQuery>
      <BrowserRouter>
        <LoginContext>
          <Navigators />
          <Routers />
        </LoginContext>
      </BrowserRouter>
    </MediaQuery>
  );
};

export default App;
