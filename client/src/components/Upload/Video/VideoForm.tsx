import React from "react";

const VideoForm = () => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <form id="video-uploader">
      <input type="file" accept="video/*" name="video" />
      <input type="text" autoComplete="off" placeholder="Title" />
      <input type="text" autoComplete="off" placeholder="Description" />
      <select onChange={onChange} name="theme" form="video-uploader">
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="education">Education</option>
      </select>
      <input type="submit" autoComplete="off" value="Upload" />
    </form>
  );
};

export default VideoForm;
