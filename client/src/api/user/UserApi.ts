import axios from "axios";
import { createContext } from "react";
import {
  ChangePasswordForm,
  SignInForm,
} from "../../types/sign/SignUpForm.type";

export class Users {
  static credential: { withCredentials: boolean };

  constructor(readonly baseUrl: string) {
    this.baseUrl = baseUrl;
    Users.credential = {
      withCredentials: true,
    };
  }

  async signUp(signUpFormData: FormData) {
    return await axios.post(
      `${this.baseUrl}/signup`,
      signUpFormData,
      Users.credential
    );
  }

  async login(signInData: SignInForm) {
    return await axios.post(`${this.baseUrl}/login`, signInData, {
      withCredentials: true,
    });
  }

  async userLoggedIn() {
    return await axios.get(`${this.baseUrl}`, Users.credential);
  }

  async update(profileUpdateForm: FormData) {
    return await axios.patch(
      `${this.baseUrl}/update`,
      profileUpdateForm,
      Users.credential
    );
  }

  async userLogout() {
    await axios.get(`${this.baseUrl}/logout`, Users.credential);
  }

  async changePass(password: ChangePasswordForm) {
    return await axios.patch(
      `${this.baseUrl}/change-password`,
      password,
      Users.credential
    );
  }
}

const usersApi = new Users(`${process.env.REACT_APP_SERVER_URL}/users`);
export const usersApiContext = createContext<Users>(usersApi);
