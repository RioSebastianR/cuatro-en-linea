import { Selector } from "./Selector";
import { useSpringRef, animated, useTransition } from "@react-spring/web";
import { BoardValue, columns } from "../../data/defaultValues";
import { useCallback, useEffect, useState } from "react";
import { transformNumberToRowColumn } from "./WinnerCombos";

export const BoardGrid = ({
  board,
  winnerCombo,
}: {
  board: BoardValue[];
  winnerCombo: number[] | undefined;
}) => {
  const [boardUi, setBoardUi] = useState<BoardValue[]>(board);

  const started = boardUi?.length;

  const transApi = useSpringRef();
  const transition = useTransition(
    started ? boardUi : [],
    started
      ? {}
      : {
          ref: transApi,
          trail: 20,
          from: { opacity: 0, scale: 0 },
          enter: { opacity: 1, scale: 1 },
          leave: { opacity: 0, scale: 0 },
        },
  );

  const updateBoardWinnerCombo = useCallback(() => {
    const updatedBoard = [...board];
    if (winnerCombo) {
      winnerCombo.forEach((number) => {
        const { row, column } = transformNumberToRowColumn(number);
        updatedBoard[row * columns.length + column] = {
          ...updatedBoard[row * columns.length + column],
          isWinnerCombo: true,
        };
      });
      console.log("updatedBoard", updatedBoard);
      setBoardUi(updatedBoard);
    }
  }, [board, winnerCombo]);

  useEffect(() => {
    if (winnerCombo) {
      updateBoardWinnerCombo();
    }
  }, [board, updateBoardWinnerCombo, winnerCombo]);

  return (
    <div className="grid grid-cols-7 gap-1 font-mono text-center font-bold leading-6">
      {transition((style, value) => {
        return (
          <animated.div style={style}>
            <Selector value={value} />
          </animated.div>
        );
      })}
    </div>
  );
};
