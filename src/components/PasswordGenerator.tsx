import React, { useState } from "react";
import PasswordBox from "./PasswordBox";
import Input from "./Input";
import CopyButton from "./CopyButton";
import styled from "styled-components";
import CharacterLength from "./CharacterLength";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px;
  background-color: var(--color-dark-grey);
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Settings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.p`
  font-size: 17px;
  line-height: 23px;
  color: var(--color-almost-white);
  text-transform: capitalize;
`;

const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const PasswordGenerator = () => {
  const [range, setRange] = useState<number>(10);
  return (
    <Main>
      <PasswordBox>
        <Input readOnly placeholder="P4$5W0rD!" inputType="Text" />
        <CopyButton handleClick={() => console.log("copied")} />
      </PasswordBox>
      <Container>
        <CharacterLength num={range} />
        <Input
          inputType="Range"
          type="range"
          min={0}
          max={20}
          value={range}
          onChange={(e) => {
            setRange(Number(e.target.value));
            console.log(range);
          }}
          style={
            {
              "--value": `${(range / 20) * 100}%`,
            } as React.CSSProperties
          }
        />
        <Settings>
          <CheckboxContainer>
            <Input inputType="Check" type="checkbox" checked={true} />
            <Label>include upercase letters</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <Input inputType="Check" type="checkbox" checked={true} />
            <Label>include lowercase letters</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <Input inputType="Check" type="checkbox" checked={true} />
            <Label>include numbers</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <Input inputType="Check" type="checkbox" checked={false} />
            <Label>include upercase symbols</Label>
          </CheckboxContainer>
        </Settings>
      </Container>
    </Main>
  );
};

export default PasswordGenerator;
