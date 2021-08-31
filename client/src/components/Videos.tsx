import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getAll } from "../api/video/getAll";
import { AllVideos } from "../types/data/video/info";
import VideoSearchControllers from "./Search/Video/VideoSearchControllers";
import VideosView from "./Views/Video/AllVideos";

const Videos: React.FC<RouteComponentProps> = ({ location }) => {
  //
  const searchVideo = location.state as AllVideos;
  const [videos, setVideos] = useState<AllVideos>([]);

  const getVideos = useCallback(async () => {
    const res = await getAll();

    const allVideos: AllVideos = res.data.result;
    setVideos(allVideos);
  }, []);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  return (
    <section>
      <VideoSearchControllers />

      <ul>
        {searchVideo
          ? searchVideo.map((item, index) => (
              <VideosView key={index} item={item} />
            ))
          : videos.map((item, index) => <VideosView key={index} item={item} />)}
      </ul>
    </section>
  );
};

export default Videos;
