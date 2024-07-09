import React, { useReducer } from "react";
import PasswordBox from "./PasswordBox";
import Input from "./Input";
import CopyButton from "./CopyButton";
import styled from "styled-components";
import CharacterLength from "./CharacterLength";
import GenerateButton from "./GenerateBtn";
import PasswordStrengthIndicator from "./StrengthIndicator";
import { calStrength } from "./CalStrength";
import toast, { Toaster } from "react-hot-toast";
import { initailState, reducerFn } from "./hooks/useReducerHook";
import { fallbackCopyTextToClipboard } from "./fallBackCopy";
import Checkbox from "./CheckBox";

const Main = styled.div`
  width: 100%;
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
  gap: 17px;
`;

const StrengthContainer = styled.div`
  background-color: var(--color-very-dark-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 22px;
  height: 22px;

  @media (max-width: 480px) {
    padding: 22px;
  }
`;

const StrengthText = styled.p`
  font-size: 15px;
  line-height: 23px;
  color: var(--color-grey);
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const PasswordGenerator = () => {
  const [state, dispatch] = useReducer(reducerFn, initailState);
  const {
    upperCase,
    lowerCase,
    symbols,
    numbers,
    length: range,
    password,
    copied,
  } = state;

  const generatePassword = () => {
    if (range < 8) {
      toast.error("Min of 8 characters needed", {
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
        toast.error("Password must include letters, numbers or symbols", {
          style: {
            background: "#24232C",
            color: "#E6E5EA",
          },
        });
      } else {
        for (let i = 0; i < range; i++) {
          randomIndex = Math.floor(Math.random() * charSet.length);
          generatedPassword += charSet[randomIndex];
          dispatch({ type: "SET_PASSWORD", payload: generatedPassword });
        }
        toast.success("Password Generated Successfully", {
          style: {
            background: "#24232C",
            color: "#E6E5EA",
            paddingRight: "20px",
            paddingLeft: "50px",
          },
        });
      }
    }
  };

  const handleCopy = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(password);
      dispatch({ type: "SET_COPIED", payload: true });
      setTimeout(() => {
        dispatch({ type: "RESET" });
      }, 2000);
    } else {
      fallbackCopyTextToClipboard(password);
      dispatch({ type: "SET_COPIED", payload: true });
      setTimeout(() => {
        dispatch({ type: "RESET" });
      }, 2000);
    }
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
        <CopyButton
          handleClick={() => handleCopy()}
          disabled={!password}
          copied={copied}
        />
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
            dispatch({ type: "SET_LENGTH", payload: Number(e.target.value) });
          }}
          style={
            {
              "--value": `${(range / 20) * 100}%`,
            } as React.CSSProperties
          }
        />
        <Settings>
          <Checkbox
            label="include uppercase letters"
            checked={upperCase}
            onChange={() => dispatch({ type: "TOGGLE_UPPERCASE" })}
          />
          <Checkbox
            label="include lowercase letters"
            checked={lowerCase}
            onChange={() => dispatch({ type: "TOGGLE_LOWERCASE" })}
          />
          <Checkbox
            label="include Numbers"
            checked={numbers}
            onChange={() => dispatch({ type: "TOGGLE_NUMBERS" })}
          />
          <Checkbox
            label="include symbols"
            checked={symbols}
            onChange={() => dispatch({ type: "TOGGLE_SYMBOLS" })}
          />
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
