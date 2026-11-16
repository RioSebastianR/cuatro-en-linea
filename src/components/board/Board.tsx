import { useCallback, useContext, useEffect, useMemo, useState } from "react";
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
import { columns, headerSelectors } from "../../data/defaultValues";
import { SelectorColumn } from "./SelectorColumn";
import { BoardGrid } from "./BoardGrid";

export const Board = () => {
  const {
    started,
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
  const [openModal, setOpenModal] = useState(false);
  const [disableSelector, setDisableSelector] = useState(false);
  const isAWinner = useMemo((): number[] => validateWinner(board), [board]);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "30%", background: "white" },
    to: {
      size: open ? "100%" : "30%",
      background: open ? "white" : "hotpink",
    },
    onStart: startGame,
  });

  // Funcion que sirve para actualizar el estado general del tablero, recibe el selector que se acaba de actualizar
  const handleChange = (value: TeamEnum, index: number): void => {
    if (disableSelector) {
      return;
    }
    columns.forEach((column) => {
      const columnValues = board.filter((cell) => cell.column === column);
      const emptyCells = columnValues.filter((cell) => cell.team === undefined);
      if (emptyCells.length > 0) {
        const lastEmptyCell = emptyCells[emptyCells.length - 1];
        if (lastEmptyCell.column === index) {
          const updatedValueBoard = [...board];

          const indexToUpdate =
            lastEmptyCell.row * columns.length + lastEmptyCell.column;
          const commonValues = {
            team: value,
            row: lastEmptyCell.row,
            column: lastEmptyCell.column,
          };

          updatedValueBoard[indexToUpdate] = {
            ...commonValues,
            active: true,
          };
          updateBoard(updatedValueBoard);
          setDisableSelector(true);

          setTimeout(() => {
            const updatedValueBoard = [...board];
            updatedValueBoard[indexToUpdate] = {
              ...commonValues,
              active: false,
            };
            updateBoard(updatedValueBoard);
            setDisableSelector(false);
          }, 750);

          setLastTeamPlayed(currentTurn);
          changeTurn();
        }
      }
    });
  };

  const headerApi = useSpringRef();
  const transitionSelectorColumn = useTransition(
    open ? headerSelectors : [],
    started
      ? {}
      : {
          ref: headerApi,
          trail: 20,
          from: { opacity: 0, scale: 0 },
          enter: { opacity: 1, scale: 1 },
          leave: { opacity: 0, scale: 0 },
        },
  );

  const handleClickStartGame = useCallback(() => {
    // resetGame();
    setOpen(true);
  }, []);

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain([springApi], [0, open ? 0.1 : 0.6]);

  useEffect(() => {
    if (isAWinner?.length > 0 && lastTeamPlayed) {
      confetti();
      setWinner(lastTeamPlayed);
    }
  }, [lastTeamPlayed, setWinner, isAWinner]);

  useEffect(() => {
    setOpenModal(winner !== undefined);
    if (winner === undefined && !started) {
      setOpen(false);
    }
  }, [started, winner]);

  return (
    <>
      <div className="relative rounded-xl overflow-auto p-2 md:p-3">
        <div
          className={`${styles.wrapper} rounded-lg bg-gradient-to-r from-blue-200 to-cyan-200`}
        >
          <div className="flex flex-col w-full justify-center text-center items-center ">
            {!open && <HomeGame />}
            <animated.div
              style={{ ...rest, width: size, height: size }}
              className={`${styles.container}`}
              onClick={handleClickStartGame}
            >
              {!open && (
                <button className="rounded-lg text-center w-full font-bungee py-3">
                  Comenzar Juego!
                </button>
              )}
              {open && (
                <>
                  <div className="grid grid-cols-7 gap-1 font-mono text-center font-bold leading-6 bg-gradient-to-r from-blue-200 to-cyan-200 pb-4">
                    {transitionSelectorColumn((style, value, _, index) => {
                      return (
                        <animated.div
                          style={{ ...style }}
                          onClick={() => handleChange(currentTurn, index)}
                        >
                          <SelectorColumn index={index} />
                        </animated.div>
                      );
                    })}
                  </div>
                  <BoardGrid board={board} winnerCombo={isAWinner} />
                </>
              )}
            </animated.div>
          </div>
        </div>
      </div>

      <GameOverModal show={openModal} onReset={resetGame}>
        <CardTeamWinner />
      </GameOverModal>
    </>
  );
};
