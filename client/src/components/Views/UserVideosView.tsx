import React from "react";
import { VideoProps } from "../../types/Video/getAll.type";

const UserVideosView: React.FC<VideoProps> = ({ item }) => {
  return (
    <li>
      <video controls width={400} height={300}>
        <source src={`http://localhost:5000/${item.videoUrl}`} />
      </video>
      <h2>{item.title}</h2>
      <p>Theme {item.theme}</p>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
};

export default UserVideosView;
