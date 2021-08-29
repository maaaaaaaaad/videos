import { Dispatch } from "react";
export type VideoFormState = {
  video: File | null;
  title: string;
  description: string;
  theme: string;
};

export type State = {
  uploadForm?: VideoFormState;
  updateForm?: Omit<VideoFormState, "video">;
};

export type Action =
  | { type: "VIDEO_UPLOAD"; uploadForm: VideoFormState }
  | { type: "VIDEO_UPDATE"; updateForm: Omit<VideoFormState, "video"> };

export type VideoFormDispatch = Dispatch<Action>;
