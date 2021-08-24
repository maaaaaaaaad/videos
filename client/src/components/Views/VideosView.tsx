import axios from "axios";
import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { GetAllVideos } from "../../api/video/getAll";
import VideoViewTemplate from "./template/VideoViewTemplate";

const VideosView = () => {
  const [getVideos, SetGetVideos] = useState<GetAllVideos[] | null>(null);

  const getAllVideos = useCallback(async () => {
    const res = await axios.get("http://localhost:5000/videos", {
      withCredentials: true,
    });

    SetGetVideos(res.data.result);
  }, []);

  useEffect(() => {
    getAllVideos();
  }, [getAllVideos]);

  return (
    <section>
      <ul>
        {getVideos?.map((item) => (
          <VideoViewTemplate key={Date.now()} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default VideosView;
