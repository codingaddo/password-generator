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

    @media (max-width: 480px) {
      font-size: 20px;
      line-height: 31px;
    }
  `,

  Range: css`
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    height: 5px;
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
  &:focus {
    border: none;
    outline: none;
  }
  ${(props) => type[props.inputType]}
`;

export default Input;
