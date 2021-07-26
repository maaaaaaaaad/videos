export interface ChangeHandler {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignUpBtn: (e: React.FormEvent<HTMLFormElement>) => void;
}
