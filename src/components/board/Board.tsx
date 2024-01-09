import { useContext, useEffect, useMemo } from "react";
import { Selector } from "./Selector";
import { TeamEnum } from "./TeamEnum";
import confetti from "canvas-confetti";
import { WINNER_COMBOS } from "./WinnerCombos";
import { GameOverModal } from "./GameOverModal";
import { CardTeamWinner } from "./CardTeamWinner";
import { GameContext } from "../../contexts/GameContext";

export const Board = () => {
  const {
    board,
    currentTurn,
    winner,
    lastTeamPlayed,
    updateBoard,
    changeTurn,
    resetGame,
    setWinner,
    setLastTeamPlayed,
  } = useContext(GameContext);

  const isAWinner = useMemo((): boolean => {
    const isAWinner = WINNER_COMBOS.some((winnerCombo) => {
      const [a, b, c, d] = winnerCombo;
      const winnerResult =
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c] &&
        board[a] === board[d];
      return winnerResult;
    });
    return isAWinner;
  }, [board]);

  // Funcion que sirve para actualizar el estado general del tablero, recibe el selector que se acaba de actualizar
  const handleChange = (value: TeamEnum, index: number): void => {
    const updatedValueBoard = [
      // se crea una copia del estado actual y asi mantengo los valores anteriores
      ...board,
      // se sobreescribe el valor para el id del selector actualizado, solo el que cambio
    ];
    updatedValueBoard[index] = value;
    updateBoard(updatedValueBoard);
    setLastTeamPlayed(currentTurn);
    changeTurn();
  };

  useEffect(() => {
    console.log(`Is a winner: ${isAWinner}`);
    if (isAWinner && lastTeamPlayed) {
      confetti();
      setWinner(lastTeamPlayed);

      // setTimeout(() => {
      //   setBoard(defaultValues);
      // }, 2000);
    }
  }, [isAWinner, lastTeamPlayed, setWinner]);

  return (
    <>
      <div className="relative rounded-xl overflow-auto p-2 md:p-6">
        <div className="grid grid-cols-7 gap-3 font-mono text-center font-bold leading-6 bg-gray-100 rounded-lg p-4 md:p-6">
          {board.map((value, index) => {
            return (
              <Selector
                key={index}
                turn={currentTurn}
                index={index}
                value={value}
                onChange={handleChange}
              />
            );
          })}
        </div>
      </div>

      <GameOverModal isVisible={winner !== undefined} onReset={resetGame}>
        <CardTeamWinner />
      </GameOverModal>
    </>
  );
};
