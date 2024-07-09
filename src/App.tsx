import AppMain from "../src/components/App";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import Title from "./components/Title";
import AppLayout from "./components/AppLayout";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <AppMain>
      <GlobalStyles />
      <Title>Password Generator</Title>
      <AppLayout>
        <PasswordGenerator />
      </AppLayout>
    </AppMain>
  );
}

export default App;
