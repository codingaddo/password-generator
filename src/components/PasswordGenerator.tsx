import React, { useState } from "react";
import PasswordBox from "./PasswordBox";
import Input from "./Input";
import CopyButton from "./CopyButton";
import styled from "styled-components";
import CharacterLength from "./CharacterLength";
import GenerateButton from "./GenerateBtn";
import PasswordStrengthIndicator from "./StrengthIndicator";
import { calStrength } from "./CalStrength";
import toast, { Toaster } from "react-hot-toast";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Container = styled.div`
  width: 100%;
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

const StrengthContainer = styled.div`
  background-color: var(--color-very-dark-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 22px;
  height: 22px;
`;

const StrengthText = styled.p`
  font-size: 15px;
  line-height: 23px;
  color: var(--color-almost-white);
  text-transform: uppercase;
`;

const PasswordGenerator = () => {
  const [range, setRange] = useState<number>(10);
  const [upperCase, setUpperCase] = useState<boolean>(true);
  const [lowerCase, setLowerCase] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const generatePassword = () => {
    if (range < 4) {
      toast.error("Password must be at least 4 characters long", {
        style: {
          background: "#24232C",
          color: "#E6E5EA",
        },
      });
    } else {
      let generatedPassword = "";
      let charSet = "";
      let randomIndex;
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const numberChars = "0123456789";
      const symbolChars = "!@#$%^&*()-_=+[{]}|;:'\",.<>/?`~";
      if (upperCase) charSet += uppercaseChars;
      if (lowerCase) charSet += lowercaseChars;
      if (numbers) charSet += numberChars;
      if (symbols) charSet += symbolChars;
      if (charSet === "") {
        toast.error("Password must include characters", {
          style: {
            background: "#24232C",
            color: "#E6E5EA",
          },
        });
      } else {
        for (let i = 0; i < range; i++) {
          randomIndex = Math.floor(Math.random() * charSet.length);
          generatedPassword += charSet[randomIndex];
          setPassword(generatedPassword);
        }
      }
    }
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard", {
      style: {
        background: "#24232C",
        color: "#E6E5EA",
        padding: "20px",
      },
    });
    setPassword("");
  };

  return (
    <Main>
      <PasswordBox>
        <Input
          type="text"
          value={password}
          readOnly
          placeholder="P4$5W0rD!"
          inputType="Text"
        />
        <CopyButton handleClick={() => handleCopy()} />
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
          }}
          style={
            {
              "--value": `${(range / 20) * 100}%`,
            } as React.CSSProperties
          }
        />
        <Settings>
          <CheckboxContainer>
            <Input
              inputType="Check"
              type="checkbox"
              checked={upperCase}
              onChange={(e) => setUpperCase(e.target.checked)}
            />
            <Label>include upercase letters</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <Input
              inputType="Check"
              type="checkbox"
              checked={lowerCase}
              onChange={(e) => setLowerCase(e.target.checked)}
            />
            <Label>include lowercase letters</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <Input
              inputType="Check"
              type="checkbox"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            <Label>include numbers</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <Input
              inputType="Check"
              type="checkbox"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
            <Label>include symbols</Label>
          </CheckboxContainer>
        </Settings>
        <StrengthContainer>
          <StrengthText>Strength</StrengthText>
          <PasswordStrengthIndicator
            strength={calStrength(lowerCase, upperCase, numbers, symbols)}
          />
        </StrengthContainer>
        <GenerateButton handleClick={() => generatePassword()} />
      </Container>
      <Toaster />
    </Main>
  );
};

export default PasswordGenerator;
