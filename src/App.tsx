import React from "react";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import Title from "./components/Title";
import AppLayout from "./components/AppLayout";
import PasswordContainer from "./components/PasswordContainer";

import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <AppLayout>
        <Title>Password Generator</Title>
        <PasswordContainer>
          <PasswordGenerator />
        </PasswordContainer>
      </AppLayout>
    </div>
  );
}

export default App;
