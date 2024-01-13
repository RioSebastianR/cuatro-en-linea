import { Flowbite } from "flowbite-react";

import { Main } from "./components/Main";
import { Content } from "./components/Content";
// import { Sidebar } from "./components/Sidebar";
import { ToastContainer } from "./components/Toast";

import "./App.css";
import { GameProvider } from "./contexts/GameContext";

import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
    },
  },
  modal: {
    root: {
      show: {
        on: "flex bg-gray-100 bg-opacity-10 dark:bg-opacity-20",
        off: "hidden",
      },
    },
  },
};

function App() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
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
