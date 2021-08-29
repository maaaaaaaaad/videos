import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AllVideos } from "../types/data/video/info";
import VideosView from "./Views/Video/AllVideos";

const Videos = () => {
  //
  const [videos, setVideos] = useState<AllVideos>([]);

  const getVideos = async () => {
    const res = await axios.get("http://localhost:5000/videos", {
      withCredentials: true,
    });

    setVideos(res.data.result);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <section>
      <ul>
        {videos.map((item, index) => (
          <VideosView key={index} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Videos;
