import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MediaQuery from "./MediaQuery";
import Navigators from "./navigators/Navigators";
import Routers from "./routes/Routers";
import { NicknameState } from "./SignTypes/User.type";

const App = () => {
  //
  const [loggedInUser, setLoggedInUser] = useState<NicknameState>(null);

  const getSessionData = async () => {
    const userText = "Hello Server!";
    const res = await axios.post("http://localhost:5000/users", userText, {
      withCredentials: true,
    });
    const userNickname: string = res.data.userSession.user?.nickname;
    console.log(userNickname ?? "Not logged in");
    setLoggedInUser(userNickname);
  };

  useEffect(() => {
    getSessionData();
  }, [loggedInUser]);

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
