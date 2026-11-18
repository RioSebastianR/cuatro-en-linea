import { useContext, useEffect, useMemo, useState } from "react";
import { TeamEnum } from "./TeamEnum";
import confetti from "canvas-confetti";
import { GameContext } from "../../contexts/GameContext";
import { useSpringRef, animated, useTransition } from "@react-spring/web";

import { validateWinner } from "../../helpers/GameValidator";
import { columns, headerSelectors } from "../../data/defaultValues";
import { SelectorColumn } from "./SelectorColumn";
import { BoardGrid } from "./BoardGrid";

export const Board = () => {
  const {
    started,
    board,
    currentTurn,
    lastTeamPlayed,
    updateBoard,
    changeTurn,
    setWinner,
    setLastTeamPlayed,
  } = useContext(GameContext);
  const [disableSelector, setDisableSelector] = useState(false);
  const winnerCombo = useMemo((): number[] => validateWinner(board), [board]);

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
    started ? headerSelectors : [],
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

  useEffect(() => {
    if (winnerCombo?.length > 0 && lastTeamPlayed) {
      confetti();
      setWinner(lastTeamPlayed);
    }
  }, [lastTeamPlayed, setWinner, winnerCombo]);

  return (
    <div className="relative rounded-xl overflow-auto p-2 md:p-3 w-full">
      <div className="rounded-lg bg-gradient-to-r from-blue-200 to-cyan-200 p-5">
        <div className="flex flex-col w-full justify-center text-center items-center ">
          <>
            <div className="w-full grid grid-cols-7 gap-1 font-mono text-center font-bold leading-6 bg-gradient-to-r from-blue-200 to-cyan-200 pb-4">
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
            <BoardGrid board={board} winnerCombo={winnerCombo} />
          </>
        </div>
      </div>
    </div>
  );
};
