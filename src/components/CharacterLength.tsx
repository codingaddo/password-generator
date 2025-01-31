import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Lable = styled.p`
  font-size: 18px;
  line-height: 23px;
  color: var(--color-almost-white);
  @media (max-width: 480px) {
    font-size: 17px;
    line-height: 21px;
  }
`;

const Number = styled.h2`
  color: var(--color-neon-green);
  font-size: 24px;
  line-height: 31px;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 21px;
  }
`;

type NumProp = { num: number };
const CharacterLength = ({ num }: NumProp) => {
  return (
    <Container>
      <Lable>Character Length</Lable>
      <Number>{num}</Number>
    </Container>
  );
};

export default CharacterLength;
