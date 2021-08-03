export interface ChangeHandler {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitBtn: (e: React.FormEvent<HTMLFormElement>) => void;
}
