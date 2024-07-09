import styled from "styled-components";

const StyledCheckbox = styled.div`
  width: 100%;

  & input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    border: 2px solid var(--color-almost-white);
    cursor: pointer;
  }

  & input[type="checkbox"]:checked {
    background-color: var(--color-neon-green);
    border: none;
  }

  & label {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 17px;
    line-height: 23px;
    color: var(--color-almost-white);
    text-transform: capitalize;
    cursor: pointer;

    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
  svg {
    position: absolute;
    left: 3px;
  }
`;

interface fnProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

function Checkbox({ checked, onChange, label }: fnProps) {
  return (
    <StyledCheckbox>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
        {checked && (
          <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke="#18171F"
              stroke-width="3"
              fill="none"
              d="M1 5.607 4.393 9l8-8"
            />
          </svg>
        )}
      </label>
    </StyledCheckbox>
  );
}

export default Checkbox;
