import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { get } from "../api/video/getUserVideos";
import { VideoInfo } from "../types/data/video/info";
import { ResponseUserData } from "../types/user/LoggedIn";
import UserVideosView from "./Views/Video/UserVideos";

const Upload: React.FC<RouteComponentProps<ResponseUserData>> = ({ match }) => {
  //
  const [userVideos, setUserVideos] = useState<VideoInfo[]>([]);

  const getUserVideos = useCallback(async () => {
    const res = await get();

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
          {userVideos.map((item) => (
            <UserVideosView key={item._id} item={item} />
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Upload;
