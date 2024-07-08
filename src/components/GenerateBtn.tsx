import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-neon-green);
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  height: 20px;
  color: var(--color-dark-grey);
  font-size: 15px;
  text-transform: uppercase;

  &:hover {
    background-color: transparent;
    border: 2px solid var(--color-neon-green);
    color: var(--color-neon-green);
  }

  svg {
    fill: var(--color-dark-grey);
  }

  &:hover svg {
    fill: var(--color-neon-green);
  }
`;

type HandleClick = {
  handleClick: () => void;
};
const GenerateButton = ({ handleClick }: HandleClick) => {
  return (
    <Button onClick={handleClick}>
      <span>Generate</span>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
      </svg>
    </Button>
  );
};
export default GenerateButton;
