import React from "react";
import { VideoProps } from "../../../types/data/video/props.interface";

import Delete from "../../Editor/Video/Delete";
import Update from "../../Editor/Video/Update";

const UserVideosView: React.FC<VideoProps> = ({ item }) => {
  return (
    <li>
      <video controls width={400} height={300}>
        <source src={`${process.env.REACT_APP_SERVER_URL}/${item.videoUrl}`} />
      </video>
      <h2>{item.title}</h2>
      <p>{item.theme}</p>
      <p>{item.date}</p>
      <p>{item.description}</p>
      <Update item={item} />
      <Delete item={item} />
    </li>
  );
};

export default UserVideosView;
