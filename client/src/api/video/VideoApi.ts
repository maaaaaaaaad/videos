import { createContext } from "react";
import axios from "axios";
import { VideoInfo } from "../../types/data/video/info";

export class Videos {
  static credential: { withCredentials: boolean };

  constructor(readonly baseUrl: string) {
    this.baseUrl = baseUrl;
    Videos.credential = {
      withCredentials: true,
    };
  }

  async getAll() {
    return await axios.get(`${this.baseUrl}`, Videos.credential);
  }

  async getOne() {
    return axios.get(`${this.baseUrl}/get-videos`, Videos.credential);
  }

  async upload(formData: FormData) {
    return await axios.post(
      `${this.baseUrl}/upload`,
      formData,
      Videos.credential
    );
  }

  async update(formData: VideoInfo) {
    return await axios.patch(
      `${this.baseUrl}/update`,
      formData,
      Videos.credential
    );
  }

  async delete(videoId: Pick<VideoInfo, "_id">) {
    return await axios.post(
      `${this.baseUrl}/delete`,
      videoId,
      Videos.credential
    );
  }

  async search(keyword: string) {
    return await axios.get(
      `${this.baseUrl}/search?keyword=${keyword}`,
      Videos.credential
    );
  }
}

const videosApi = new Videos(`${process.env.REACT_APP_SERVER_URL}/videos`);
export const videosApiContext = createContext<Videos>(videosApi);
