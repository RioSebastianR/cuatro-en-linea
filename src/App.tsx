import { Flowbite } from "flowbite-react";

import { Main } from "./components/Main";
import { Content } from "./components/Content";
// import { Sidebar } from "./components/Sidebar";
import { ToastContainer } from "./components/Toast";

import "./App.css";
import { GameProvider } from "./contexts/GameContext";

function App() {
  return (
    <Flowbite>
      <GameProvider>
        <>
          <ToastContainer />
          <Main>
            <>
              {/* <Sidebar /> */}
              <Content />
            </>
          </Main>
        </>
      </GameProvider>
    </Flowbite>
  );
}

export default App;
