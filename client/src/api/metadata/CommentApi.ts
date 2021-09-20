import { createContext } from "react";
import axios from "axios";
import { Comment } from "../../types/data/metadata/comment.type";

export class MetadataComments {
  static credential: { withCredentials: boolean };

  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl;
    MetadataComments.credential = {
      withCredentials: true,
    };
  }

  async getAll() {
    return await axios.get(
      `${this.baseUrl}/get-comments`,
      MetadataComments.credential
    );
  }

  async upload(comment: Comment) {
    return await axios.post(
      `${this.baseUrl}/create-comment`,
      comment,
      MetadataComments.credential
    );
  }
}

const commentApi = new MetadataComments(
  `${process.env.REACT_APP_SERVER_URL}/metadata`
);
export const commentApiContext = createContext<MetadataComments>(commentApi);
