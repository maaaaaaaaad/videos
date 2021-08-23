import React from "react";
import { ChangeHandler } from "../../../types/changeHandler/change.interface";

const VideoForm: React.FC<ChangeHandler> = ({
  handleSubmitBtn,
  handleChange,
  handleSelectedChange,
  handleChangeTextArea,
}) => {
  return (
    <form id="video-uploader" onSubmit={(e) => handleSubmitBtn(e)}>
      <input
        onChange={(e) => handleChange(e)}
        type="file"
        accept="video/*"
        name="video"
      />
      <input
        name="title"
        type="text"
        autoComplete="off"
        placeholder="Title"
        onChange={(e) => handleChange(e)}
      />
      <textarea
        name="description"
        autoComplete="off"
        placeholder="Description"
        onChange={(e) => handleChangeTextArea!(e)}
      />
      <select
        onChange={(e) => handleSelectedChange!(e)}
        name="theme"
        form="video-uploader"
      >
        <option value="default">Default</option>
        <option value="education">Education</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
      </select>
      <input type="submit" autoComplete="off" value="Upload" />
    </form>
  );
};

export default VideoForm;
