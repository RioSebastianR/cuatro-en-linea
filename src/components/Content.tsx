import { useSpringRef, useSpring, useChain, animated } from "@react-spring/web";

import { Board } from "./board/Board";
// import { Navbar } from "./../components/Navbar";

import { Sideboard } from "./board/Sideboard";
import { useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import { AvatarSelector } from "./user-configs/avatar-selector/AvatarSelector";
import { GameOverModal } from "./board/GameOverModal";
import { CardTeamWinner } from "./board/CardTeamWinner";
import { StartGameButton } from "./user-configs/StartGameButton";
import { GameHeader } from "./GameHeader";

export const Content = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { started, winner, resetGame } = useContext(GameContext);

  const springs = useSpring({
    from: { y: -500 },
    to: { y: 0 },
  });

  const springApi = useSpringRef();

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain([springApi], [0, open ? 0.1 : 0.6]);

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleClickStartGame = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    setOpenModal(winner !== undefined);
    if (winner === undefined && !started) {
      setOpen(false);
    }
  }, [started, winner]);

  return (
    <animated.div
      style={{
        ...springs,
      }}
    >
      <main>
        <div className="flex md:flex-row flex-col w-full">
          {/* <Navbar /> */}
          {!started && (
            <div className="mx-auto md:basis-3/4 basis-4/4 p-6 md:p-6 sm:px-6 lg:px-8 text-white">
              <div className="flex flex-col w-full justify-center text-center items-center ">
                <GameHeader />
                <AvatarSelector />
                <StartGameButton onStart={handleClickStartGame} />
              </div>
            </div>
          )}
          {started && (
            <div className="flex w-full text-white px-20">
              <Board />
              <Sideboard />
            </div>
          )}
        </div>
        <GameOverModal
          show={openModal}
          onClose={closeModal}
          onReset={resetGame}
        >
          <CardTeamWinner />
        </GameOverModal>
      </main>
    </animated.div>
  );
};
