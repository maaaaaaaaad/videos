import React from "react";
import { useState } from "react";
import { VideoProps } from "../../../types/Video/edit.type";

const Update: React.FC<VideoProps> = ({ item }) => {
  const [editForm, setEditForm] = useState<boolean>(true);

  const formToggle = () => {
    setEditForm((prev) => !prev);
  };

  return (
    <section>
      {editForm ? (
        <button onClick={formToggle}>Change</button>
      ) : (
        <section>
          <form id="video-editor">
            <input type="text" placeholder={item.title} />
            <textarea name="description" placeholder={item.description} />
            <select name="theme" form="video-editor">
              <option value="default">Default</option>
              <option value="education">Education</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
            </select>
          </form>
          <button onClick={formToggle}>Update</button>
        </section>
      )}
    </section>
  );
};

export default Update;
