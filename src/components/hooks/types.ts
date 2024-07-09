export interface State {
  password: string;
  lowerCase: boolean;
  upperCase: boolean;
  numbers: boolean;
  symbols: boolean;
  copied: boolean;
  error: string;
  length: number;
}

export type Action =
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_LENGTH"; payload: number }
  | { type: "SET_ERROR"; payload: string }
  | { type: "SET_COPIED"; payload: boolean }
  | { type: "TOGGLE_LOWERCASE" }
  | { type: "TOGGLE_UPPERCASE" }
  | { type: "TOGGLE_SYMBOLS" }
  | { type: "TOGGLE_NUMBERS" }
  | { type: "RESET" };
