import axios from "axios";
import { createContext } from "react";
import {
  ChangePasswordForm,
  SignInForm,
} from "../../types/sign/SignUpForm.type";

export class Users {
  credential: { withCredentials: boolean };

  constructor(readonly baseUrl: string) {
    this.baseUrl = baseUrl;
    this.credential = {
      withCredentials: true,
    };
  }

  async signUp(signUpFormData: FormData) {
    return await axios.post(
      `${this.baseUrl}/signup`,
      signUpFormData,
      this.credential
    );
  }

  async login(signInData: SignInForm) {
    return await axios.post(`${this.baseUrl}/login`, signInData, {
      withCredentials: true,
    });
  }

  async userLoggedIn() {
    return await axios.get(`${this.baseUrl}`, this.credential);
  }

  async update(profileUpdateForm: FormData) {
    return await axios.patch(
      `${this.baseUrl}/update`,
      profileUpdateForm,
      this.credential
    );
  }

  async userLogout() {
    await axios.get(`${this.baseUrl}/logout`, this.credential);
  }

  async changePass(password: ChangePasswordForm) {
    return await axios.patch(
      `${this.baseUrl}/change-password`,
      password,
      this.credential
    );
  }
}

const usersApi = new Users(`${process.env.REACT_APP_SERVER_URL}/users`);
export const usersApiContext = createContext<Users>(usersApi);
