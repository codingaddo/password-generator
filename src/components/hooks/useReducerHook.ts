import { State, Action } from "./types";
export const initailState: State = {
  password: "",
  lowerCase: true,
  upperCase: true,
  numbers: true,
  symbols: false,
  copied: false,
  error: "",
  length: 10,
};

export const reducerFn = (
  state: State = initailState,
  action: Action
): State => {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_LENGTH":
      return { ...state, length: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_COPIED":
      return { ...state, copied: action.payload };
    case "TOGGLE_LOWERCASE":
      return { ...state, lowerCase: !state.lowerCase };
    case "TOGGLE_UPPERCASE":
      return { ...state, upperCase: !state.upperCase };
    case "TOGGLE_SYMBOLS":
      return { ...state, symbols: !state.symbols };
    case "TOGGLE_NUMBERS":
      return { ...state, numbers: !state.numbers };

    case "RESET":
      return initailState;
    default:
      return state;
  }
};
