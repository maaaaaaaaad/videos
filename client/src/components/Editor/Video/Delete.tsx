import React from "react";
import { useContext } from "react";
import { videosApiContext } from "../../../api/video/VideoApi";
import { VideoInfo } from "../../../types/data/video/info.type";
import { VideoProps } from "../../../types/data/video/props.interface";

const Delete: React.FC<VideoProps> = ({ item }) => {
  //
  const api = useContext(videosApiContext);
  const handleVideoDelete = async () => {
    //
    const videoId: Pick<VideoInfo, "_id"> = {
      _id: item._id,
    };
    await api.delete(videoId);
    window.location.reload();
  };

  return <button onClick={handleVideoDelete}>Delete</button>;
};

export default Delete;
