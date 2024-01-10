import { useContext, useEffect, useMemo, useState } from "react";
import { Selector } from "./Selector";
import { TeamEnum } from "./TeamEnum";
import confetti from "canvas-confetti";
import { GameOverModal } from "./GameOverModal";
import { CardTeamWinner } from "./CardTeamWinner";
import { GameContext } from "../../contexts/GameContext";
import {
  useSpringRef,
  useSpring,
  config,
  useChain,
  animated,
  useTransition,
} from "@react-spring/web";

import styles from "./styles.module.css";
import { validateWinner } from "../../helpers/GameValidator";
import { HomeGame } from "../HomeGame";

export const Board = () => {
  const {
    board,
    currentTurn,
    winner,
    lastTeamPlayed,
    startGame,
    updateBoard,
    changeTurn,
    resetGame,
    setWinner,
    setLastTeamPlayed,
  } = useContext(GameContext);
  const [open, setOpen] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const isAWinner = useMemo((): boolean => validateWinner(board), [board]);

  // Funcion que sirve para actualizar el estado general del tablero, recibe el selector que se acaba de actualizar
  const handleChange = (value: TeamEnum, index: number): void => {
    const updatedValueBoard = [
      // se crea una copia del estado actual y asi mantengo los valores anteriores
      ...board,
      // se sobreescribe el valor para el id del selector actualizado, solo el que cambio
    ];
    updatedValueBoard[index] = { team: value, index };
    updateBoard(updatedValueBoard);
    setLastTeamPlayed(currentTurn);
    changeTurn();
  };

  const handleStart = () => {
    setOpen(true);
    startGame();
  };

  const transApi = useSpringRef();
  const transition = useTransition(
    open ? board : [],
    !open
      ? {}
      : {
          ref: transApi,
          trail: 20,
          from: { opacity: 0, scale: 0 },
          enter: { opacity: 1, scale: 1 },
          leave: { opacity: 0, scale: 0 },
        }
  );

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain([springApi, transApi], [0, open ? 0.1 : 0.6]);

  useEffect(() => {
    console.log(`Is a winner: ${isAWinner}`);
    if (isAWinner && lastTeamPlayed) {
      confetti();
      setWinner(lastTeamPlayed);
    }
  }, [isAWinner, lastTeamPlayed, setWinner]);

  return (
    <>
      <div className="relative rounded-xl overflow-auto p-2 md:p-6">
        <div className={`${styles.wrapper} rounded-lg`}>
          <div className="flex flex-col w-full justify-center text-center items-center">
            {!open && <HomeGame />}
            <animated.div
              style={{ ...rest, width: size, height: size }}
              className={`${styles.container} p-5`}
              onClick={() => handleStart()}
            >
              {!open && (
                <button className="rounded-lg text-center w-full">
                  Comenzar Juego!
                </button>
              )}
              <div className="grid grid-cols-7 gap-3 font-mono text-center font-bold leading-6">
                {transition((style, value, _, index) => {
                  return (
                    <animated.div
                      style={{ ...style }}
                      onClick={() => handleChange(currentTurn, index)}
                    >
                      <Selector value={value} />
                    </animated.div>
                  );
                })}
              </div>
            </animated.div>
          </div>
        </div>
      </div>

      <GameOverModal isVisible={winner !== undefined} onReset={resetGame}>
        <CardTeamWinner />
      </GameOverModal>
    </>
  );
};
