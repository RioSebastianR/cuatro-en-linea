import { WINNER_COMBOS } from "../components/board/WinnerCombos";
import { BoardValue } from "../data/defaultValues";

export const validateWinner = (board: BoardValue[]): boolean => {
  return WINNER_COMBOS.some((winnerCombo) => {
    const [a, b, c, d] = winnerCombo;
    const winnerResult =
      board[a]?.team &&
      board[a]?.team === board[b]?.team &&
      board[a]?.team === board[c]?.team &&
      board[a]?.team === board[d]?.team;
    return winnerResult;
  });
};
