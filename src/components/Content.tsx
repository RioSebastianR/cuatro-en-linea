import { useSpring, animated } from "@react-spring/web";

import { Board } from "./board/Board";
// import { Navbar } from "./../components/Navbar";

import { Sideboard } from "./board/Sideboard";
import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export const Content = () => {
  const { started } = useContext(GameContext);

  const springs = useSpring({
    from: { y: -500 },
    to: { y: 0 },
  });

  return (
    <animated.div
      style={{
        ...springs,
      }}
    >
      <main>
        <div className="flex md:flex-row flex-col w-full">
          <div className="mx-auto md:basis-3/4 basis-4/4 p-6 md:p-6 sm:px-6 lg:px-8 text-white">
            {/* <Navbar /> */}

            <Board />
          </div>
          {started && <Sideboard />}
        </div>
      </main>
    </animated.div>
  );
};
