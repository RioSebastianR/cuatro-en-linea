import { Flowbite } from "flowbite-react";

import { Main } from "./components/Main";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import { ToastContainer } from "./components/Toast";

import "./App.css";

function App() {
  return (
    <Flowbite>
      <ToastContainer />
      <Main>
        <>
          <Sidebar />
          <Content />
        </>
      </Main>
    </Flowbite>
  );
}

export default App;
