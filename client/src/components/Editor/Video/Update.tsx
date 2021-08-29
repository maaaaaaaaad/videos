import React from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  VideoDispatchContext,
  VideoStateContext,
} from "../../../contexts/VideoContexts";
import { VideoFormState } from "../../../types/data/video/form.type";
import { VideoProps } from "../../../types/data/video/props.interface";

const Update: React.FC<VideoProps> = ({ item }) => {
  const state = useContext(VideoStateContext);
  const dispatch = useContext(VideoDispatchContext);
  const [editForm, setEditForm] = useState<boolean>(true);

  const formToggle = () => {
    setEditForm((prev) => !prev);
  };

  const handleVideoEdit = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    dispatch!({
      type: "VIDEO_UPDATE",
      updateForm: {
        ...state?.updateForm,
        [e.currentTarget.name]: e.currentTarget.value,
      } as Omit<VideoFormState, "video">,
    });

    console.log(state?.updateForm);
  };

  return (
    <section>
      {editForm ? (
        <button onClick={formToggle}>Change</button>
      ) : (
        <section>
          <form id="video-editor">
            <input
              onChange={handleVideoEdit}
              name="title"
              type="text"
              placeholder={item.title}
            />
            <textarea
              onChange={handleVideoEdit}
              name="description"
              placeholder={item.description}
            />
            <select onChange={handleVideoEdit} name="theme" form="video-editor">
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
