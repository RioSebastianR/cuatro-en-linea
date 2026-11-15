import {
  WINNER_COMBOS,
  transformNumberToRowColumn,
} from "../components/board/WinnerCombos";
import { BoardValue } from "../data/defaultValues";

export const validateWinner = (board: BoardValue[]): number[] => {
  const winnerComboResult: number[] = [];
  WINNER_COMBOS.forEach((winnerCombo) => {
    const [a, b, c, d] = winnerCombo;
    const winnerComboCoordinates = winnerCombo.map((number) => {
      return transformNumberToRowColumn(number);
    });

    const combo1 = board.find(
      ({ row, column, team }) =>
        winnerComboCoordinates[0].row === row &&
        winnerComboCoordinates[0].column === column &&
        team !== undefined,
    );

    const combo2 = board.find(
      ({ row, column, team }) =>
        winnerComboCoordinates[1].row === row &&
        winnerComboCoordinates[1].column === column &&
        team !== undefined,
    );

    const combo3 = board.find(
      ({ row, column, team }) =>
        winnerComboCoordinates[2].row === row &&
        winnerComboCoordinates[2].column === column &&
        team !== undefined,
    );

    const combo4 = board.find(
      ({ row, column, team }) =>
        winnerComboCoordinates[3].row === row &&
        winnerComboCoordinates[3].column === column &&
        team !== undefined,
    );

    const winnerResult =
      combo1 &&
      combo2 &&
      combo3 &&
      combo4 &&
      combo1.team === combo2.team &&
      combo1.team === combo3.team &&
      combo1.team === combo4.team;

    if (winnerResult) {
      console.log(
        `Winner combo is: ${[a, b, c, d]}, coords: ${JSON.stringify(winnerComboCoordinates)}`,
      );
      winnerComboResult.push(a, b, c, d);
    }
  });
  return winnerComboResult;
};
