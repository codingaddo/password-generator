import styled, { css } from "styled-components";

const type = {
  Text: css`
    width: 100%;
    background-color: inherit;
    border: none;
    color: var(--color-almost-white);
    font-size: 25px;
    line-height: 41px;
    ::placeholder {
      color: var(--color-grey);
    }
    &:focus {
      border: none;
      outline: none;
    }
  `,
  Check: css`
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    border: 2px solid var(--color-almost-white);
    background-color: inherit;
    cursor: pointer;

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
      background-image: url('data:image/svg+xml,%3Csvg width="14" height="12" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="%2318171F" stroke-width="3" fill="#FFFFFF" d="M1 5.607L4.393 9l8-8"/%3E%3C/svg%3E');
      background-size: contain;
      background-repeat: no-repeat;
    }
    &:hover {
      border: 2px solid var(--color-neon-green);
    }
    &:checked {
      background-color: var(--color-neon-green);
      border: 2px solid var(--color-neon-green);
    }
  `,
  Range: css`
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    height: 7px;
    width: 100%;
    background-color: var(--color-very-dark-grey);
    -webkit-transition: 500ms;
    transition: 500ms;
    background: linear-gradient(
      90deg,
      var(--color-neon-green) var(--value),
      var(--color-very-dark-grey) var(--value)
    );

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: var(--color-almost-white);

      &:hover {
        background-color: var(--color-very-dark-grey);
        border: 1.5px solid var(--color-neon-green);
      }
    }

    &::-moz-range-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: var(--color-almost-white);

      &:hover {
        background-color: var(--color-very-dark-grey);
        border: 1.5px solid var(--color-neon-green);
      }
    }
  `,
};

interface InputProps {
  inputType: keyof typeof type;
}

const Input = styled.input<InputProps>`
  /* width: 100%; */
  &:focus {
    border: none;
    outline: none;
  }
  ${(props) => type[props.inputType]}
`;

export default Input;
