import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";

import "./App.css";

function App() {
  return (
    <Main>
      <>
        <Navbar />
        <Content />
      </>
    </Main>
  );
}

export default App;
