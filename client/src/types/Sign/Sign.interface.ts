export interface ChangeHandler {
  loadingSpanner?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitBtn: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCheckEmail?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
