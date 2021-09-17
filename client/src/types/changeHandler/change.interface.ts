export interface ChangeHandler {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectedChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeTextArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmitBtn: (e: React.FormEvent<HTMLFormElement>) => void;
  handleAgeCheck?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
