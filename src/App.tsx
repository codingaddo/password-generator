import GlobalStyles from "./styles/GlobalStyles";
import Title from "./components/Title";
import AppMain from "./components/AppMain";
import AppLayout from "./components/AppLayout";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppMain>
        <Title>Password Generator</Title>
        <AppLayout>
          <PasswordGenerator />
        </AppLayout>
      </AppMain>
    </>
  );
}

export default App;
