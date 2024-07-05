import React from "react";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <h1>Password Generator</h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
