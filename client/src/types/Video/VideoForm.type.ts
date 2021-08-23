import { Dispatch } from "react";
export type VideoForm = {
  video: File | null;
  title: string;
  description: string;
  theme: string;
};

export type State = {
  videoData?: Pick<VideoForm, "video">;
  titleData?: Pick<VideoForm, "title">;
  descriptionData?: Pick<VideoForm, "description">;
  theme?: Pick<VideoForm, "theme">;
};

export type Action =
  | {
      type: "VIDEO_UPLOAD";
      videoData?: Pick<VideoForm, "video">;
    }
  | { type: "TITLE_UPLOAD"; titleData?: Pick<VideoForm, "title"> }
  | {
      type: "DESCRIPTION_UPLOAD";
      descriptionData?: Pick<VideoForm, "description">;
    }
  | { type: "THEME_UPLOAD"; theme?: Pick<VideoForm, "theme"> };

export type VideoFormDispatch = Dispatch<Action>;
