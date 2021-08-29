import axios from "axios";
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { ResponseUserData } from "../types/user/LoggedIn";
import UserVideosView from "./Views/Video/UserVideos";

const Upload: React.FC<RouteComponentProps<ResponseUserData>> = ({ match }) => {
  //
  const [userVideos, setUserVideos] = useState<[]>([]);

  const getUserVideos = useCallback(async () => {
    const res = await axios.get("http://localhost:5000/videos/get-videos", {
      withCredentials: true,
    });

    setUserVideos(res.data.result);
  }, []);

  useEffect(() => {
    getUserVideos();
  }, [getUserVideos]);

  return (
    <section>
      <ul>
        <li>
          <button>
            <Link to={`${match.url}/video`}>Video</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={`${match.url}/book`}>Book</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={`${match.url}/note`}>Note</Link>
          </button>
        </li>
      </ul>

      <main>
        <ul>
          {userVideos.map((item, index) => (
            <UserVideosView key={index} item={item} />
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Upload;
