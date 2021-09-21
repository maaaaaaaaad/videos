import React, { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { usersApiContext } from "./api/user/UserApi";
import MediaQuery from "./MediaQuery";
import Navigators from "./navigators/Navigators";
import Routers from "./routes/Routers";
import { ResponseUserData } from "./types/user/LoggedIn";

export const ResUserDataContext = createContext<ResponseUserData | null>(null);

const App = () => {
  //
  const api = useContext(usersApiContext);
  const [resUserData, setResUserData] = useState<ResponseUserData | null>(null);

  const getSessionData = useCallback(async () => {
    const res = await api.userLoggedIn();
    const resUserData: ResponseUserData = res.data.userSession;
    console.log("User Nickname:", resUserData?.nickname ?? "Not logged in");
    console.log("User data:", resUserData);
    setResUserData(resUserData);
  }, [api]);

  useEffect(() => {
    getSessionData();
  }, [getSessionData]);

  return (
    <MediaQuery>
      <BrowserRouter>
        <ResUserDataContext.Provider value={resUserData}>
          <Navigators />
          <section className="m-5">
            <Routers />
          </section>
        </ResUserDataContext.Provider>
      </BrowserRouter>
    </MediaQuery>
  );
};

export default App;
