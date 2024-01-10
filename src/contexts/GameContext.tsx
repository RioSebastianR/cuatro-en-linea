import { createContext, ReactNode, useState } from "react";
import { TeamEnum } from "../components/board/TeamEnum";
import { BoardValue, defaultValues } from "../data/defaultValues";

interface GameContextValue {
  started: boolean;
  winner?: TeamEnum;
  winnerModalVisible: boolean;
  board: BoardValue[];
  currentTurn: TeamEnum;
  lastTeamPlayed?: TeamEnum;
  startGame(): void;
  changeTurn(): void;
  setWinner(winner?: TeamEnum): void;
  updateBoard(board: BoardValue[]): void;
  resetGame(): void;
  setLastTeamPlayed(team: TeamEnum): void;
}

export const GameProvider = ({ children }: { children?: ReactNode }) => {
  const [started, _setStarted] = useState(false);
  const [winner, _setWinner] = useState<TeamEnum | undefined>(undefined);
  const [board, _setBoard] = useState<BoardValue[]>(defaultValues);
  const [currentTurn, setCurrentTurn] = useState<TeamEnum>(TeamEnum.A);
  const [lastTeamPlayed, _setLastTeamPlayed] = useState<TeamEnum | undefined>(
    undefined
  );
  const [winnerModalVisible, setModalVisible] = useState<boolean>(false);

  const setWinner = (winnerUpdated: TeamEnum | undefined) => {
    _setWinner(winnerUpdated);
  };

  const startGame = () => {
    _setStarted(true);
  };

  const resetGame = () => {
    setModalVisible(false);
    _setBoard(defaultValues);
    setWinner(undefined);
    // TODO: solo deberia marcarse como false si se finaliza la partida y ya no se sigue jugando
    // _setStarted(false);
  };

  const updateBoard = (board: BoardValue[]) => {
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
        started,
        winner,
        winnerModalVisible,
        board,
        currentTurn,
        lastTeamPlayed,
        startGame,
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
