export interface SearchHandlers {
  handleKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}
