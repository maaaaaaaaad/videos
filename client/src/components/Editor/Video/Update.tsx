import axios from "axios";
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

  const handleChangeSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state?.updateForm) {
      const formData = {
        _id: item._id!,
        title: state.updateForm.title || item.title,
        description: state.updateForm.description || item.description,
        theme: state.updateForm.theme || item.theme,
      };

      try {
        const res = await axios.patch(
          "http://localhost:5000/videos/update",
          formData,
          { withCredentials: true }
        );
        console.log(res.data);
        window.location.reload();
      } catch (error) {
        console.log(error.message);
      }
    }

    return;
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
  };

  return (
    <section>
      {editForm ? (
        <button onClick={formToggle}>Change</button>
      ) : (
        <section>
          <form onSubmit={handleChangeSave} id="video-editor">
            <input
              onChange={handleVideoEdit}
              name="title"
              type="text"
              placeholder="title"
              defaultValue={item.title}
              autoComplete="off"
            />
            <textarea
              onChange={handleVideoEdit}
              name="description"
              placeholder="description"
              defaultValue={item.description}
              autoComplete="off"
            />
            <select
              onChange={handleVideoEdit}
              name="theme"
              form="video-editor"
              placeholder="theme"
              defaultValue={item.theme}
              required
            >
              <option value="default">Default</option>
              <option value="education">Education</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
            </select>
            <input type="submit" value="Update" />
          </form>
          <button onClick={formToggle}>Close</button>
        </section>
      )}
    </section>
  );
};

export default Update;
