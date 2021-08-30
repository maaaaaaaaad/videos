import React from "react";
import { deleted } from "../../../api/video/delete";
import { VideoInfo } from "../../../types/data/video/info";
import { VideoProps } from "../../../types/data/video/props.interface";

const Delete: React.FC<VideoProps> = ({ item }) => {
  //
  const handleVideoDelete = async () => {
    //
    const videoId: Pick<VideoInfo, "_id"> = {
      _id: item._id,
    };
    await deleted(videoId);
    window.location.reload();
  };

  return <button onClick={handleVideoDelete}>Delete</button>;
};

export default Delete;
