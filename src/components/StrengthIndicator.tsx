import React from "react";
import styled from "styled-components";
import { getStrengthLabel, getStrengthColor } from "./getStrengthColorLable";

const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--color-very-dark-grey);
`;

const IndicatorLabel = styled.p`
  flex: 1;
  font-size: 18px;
  line-height: 28px;
  color: var(--color-almost-white);
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

const IndicatorBarsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const IndicatorBar = styled.div<{ color: string; border: string }>`
  width: 7px;
  height: 20px;
  border: 1px solid ${(props) => props.border};
  background-color: ${(props) => props.color};
`;

type indicatorProp = {
  strength: number;
};
const StrengthIndicator = ({ strength }: indicatorProp) => {
  return (
    <Wraper>
      <IndicatorLabel>{getStrengthLabel(strength)}</IndicatorLabel>
      <IndicatorBarsWrapper>
        {[...Array(4)].map((_, index) => (
          <IndicatorBar
            key={index}
            color={
              index < strength
                ? getStrengthColor(strength)
                : "var(--color-very-dark-gry)"
            }
            border={index < strength ? "" : "var(--color-almost-white)"}
          />
        ))}
      </IndicatorBarsWrapper>
    </Wraper>
  );
};

export default StrengthIndicator;
