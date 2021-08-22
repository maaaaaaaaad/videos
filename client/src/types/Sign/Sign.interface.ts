export interface ChangeHandler {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitBtn: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface SignUpHandler extends ChangeHandler {
  loadingSpanner: boolean;
  checkId: string | null;
  emailKey: string | null;
  okEmail: boolean;
  handleSendEmail: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleEmailKey: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignEmail: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
