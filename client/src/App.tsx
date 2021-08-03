import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserLoggedIn } from "./api/user/userLoggedIn";
import MediaQuery from "./MediaQuery";
import Navigators from "./navigators/Navigators";
import Routers from "./routes/Routers";
import { ResponseUserData } from "./types/User/LoggedIn";

export const ResUserDataContext = createContext<ResponseUserData | null>(null);

const App = () => {
  //
  const [resUserData, setResUserData] = useState<ResponseUserData | null>(null);

  const getSessionData = async () => {
    //
    const res = await UserLoggedIn();
    const resUserData: ResponseUserData = res.data.userSession.user;

    console.log("User Nickname:", resUserData?.nickname ?? "Not logged in");
    setResUserData(resUserData);
  };

  useEffect(() => {
    getSessionData();
  }, []);

  return (
    <MediaQuery>
      <BrowserRouter>
        <ResUserDataContext.Provider value={resUserData}>
          <Navigators />
          <Routers />
        </ResUserDataContext.Provider>
      </BrowserRouter>
    </MediaQuery>
  );
};

export default App;
