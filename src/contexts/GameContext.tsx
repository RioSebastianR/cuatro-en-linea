import { createContext, ReactNode, useState } from "react";
import { TeamEnum } from "../components/board/TeamEnum";
import { defaultValues } from "../data/defaultValues";

interface GameContextValue {
  winner?: TeamEnum;
  winnerModalVisible: boolean;
  board: (TeamEnum | null)[];
  currentTurn: TeamEnum;
  lastTeamPlayed?: TeamEnum;
  changeTurn(): void;
  setWinner(winner?: TeamEnum): void;
  updateBoard(board: (TeamEnum | null)[]): void;
  resetGame(): void;
  setLastTeamPlayed(team: TeamEnum): void;
}

export const GameProvider = ({ children }: { children?: ReactNode }) => {
  const [winner, _setWinner] = useState<TeamEnum | undefined>(undefined);
  const [board, _setBoard] = useState<(TeamEnum | null)[]>(defaultValues);
  const [currentTurn, setCurrentTurn] = useState<TeamEnum>(TeamEnum.A);
  const [lastTeamPlayed, _setLastTeamPlayed] = useState<TeamEnum | undefined>(
    undefined
  );
  const [winnerModalVisible, setModalVisible] = useState<boolean>(false);

  const setWinner = (winnerUpdated: TeamEnum | undefined) => {
    _setWinner(winnerUpdated);
  };

  const resetGame = () => {
    setModalVisible(false);
    _setBoard(defaultValues);
    setWinner(undefined);
  };

  const updateBoard = (board: (TeamEnum | null)[]) => {
    _setBoard(board);
  };

  const changeTurn = () => {
    setCurrentTurn((currentTurn) =>
      currentTurn === TeamEnum.A ? TeamEnum.B : TeamEnum.A
    );
  };

  const setLastTeamPlayed = (team?: TeamEnum) => {
    _setLastTeamPlayed(team);
  };

  return (
    <GameContext.Provider
      value={{
        winner,
        winnerModalVisible,
        board,
        currentTurn,
        lastTeamPlayed,
        changeTurn,
        setWinner,
        updateBoard,
        resetGame,
        setLastTeamPlayed,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const GameContext = createContext<GameContextValue>(
  {} as GameContextValue
);
