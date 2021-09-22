import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { videosApiContext } from "../../../api/video/VideoApi";
import {
  VideoDispatchContext,
  VideoStateContext,
} from "../../../contexts/VideoContexts";
import { VideoFormState } from "../../../types/data/video/form.type";
import { VideoInfo } from "../../../types/data/video/info";
import { VideoProps } from "../../../types/data/video/props.interface";

const Update: React.FC<VideoProps> = ({ item }) => {
  const api = useContext(videosApiContext);
  const state = useContext(VideoStateContext);
  const dispatch = useContext(VideoDispatchContext);
  const [editForm, setEditForm] = useState<boolean>(true);

  const formToggle = () => {
    setEditForm((prev) => !prev);
  };

  const handleChangeSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state?.updateForm) {
      const formData: VideoInfo = {
        _id: item._id!,
        title: state.updateForm.title || item.title,
        description: state.updateForm.description || item.description,
        theme: state.updateForm.theme || item.theme,
      };

      try {
        await api.update(formData);
        window.location.reload();
      } catch (error) {
        console.log(error);
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
