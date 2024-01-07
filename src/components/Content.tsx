import { useSpring, animated } from "@react-spring/web";

import { Board } from "./board/Board";
// import { Navbar } from "./../components/Navbar";

import { useState } from "react";
import { TeamEnum } from "./board/TeamEnum";
import { CardTeam } from "./board/CardTeam";
import { DarkThemeToggle } from "flowbite-react";

export const Content = () => {
  const [turn, setTurn] = useState(TeamEnum.A);

  const handleChangeTurn = () => {
    setTurn((turn) => (turn === TeamEnum.A ? TeamEnum.B : TeamEnum.A));
  };

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
            {/* <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
        <div className="not-prose relative bg-gray-100 rounded-xl overflow-hidden"> */}
            {/* <div className="p-4 sm:ml-64"> */}
            <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              <Board turn={turn} onChangeTurn={handleChangeTurn} />
            </div>
          </div>
          <div className="mx-auto md:basis-1/4 basis-4/4 p-6 md:p-6 sm:px-6 lg:px-8 text-white">
            <div className="m-6 flex justify-end">
              <DarkThemeToggle />
            </div>
            <div className="flex md:flex-col flex-row gap-6">
              <CardTeam
                key={TeamEnum.A}
                isSelected={turn === TeamEnum.A}
                team={TeamEnum.A}
              />
              <CardTeam
                key={TeamEnum.B}
                isSelected={turn === TeamEnum.B}
                team={TeamEnum.B}
              />
            </div>
          </div>
        </div>
      </main>
    </animated.div>
  );
};
