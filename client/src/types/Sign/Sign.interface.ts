import { ChangeHandler } from "../changeHandler/change.interface";

export interface SignUpHandler extends ChangeHandler {
  loadingSpanner: boolean;
  checkId: string | null;
  checkNick: string | null;
  emailKey: string | null;
  okEmail: boolean;
  handleSendEmail: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleEmailKey: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSignEmail: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
