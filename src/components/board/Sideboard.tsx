import { CardTeam } from "./CardTeam";
import { Button } from "flowbite-react";
import { TeamEnum } from "./TeamEnum";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { GameHeader } from "../GameHeader";

export const Sideboard = () => {
  const { currentTurn, winner, resetGame, stopGame } = useContext(GameContext);

  return (
    <div className="mx-auto md:basis-2/5 basis-4/4 p-6 md:p-6 sm:px-6 lg:px-8 text-white">
      <GameHeader />
      {winner === undefined && (
        <div className="flex md:flex-col flex-row gap-6">
          <CardTeam
            key={TeamEnum.A}
            isSelected={currentTurn === TeamEnum.A}
            team={TeamEnum.A}
          />
          <CardTeam
            key={TeamEnum.B}
            isSelected={currentTurn === TeamEnum.B}
            team={TeamEnum.B}
          />
        </div>
      )}
      <div className="flex flex-row gap-2">
        <Button
          gradientDuoTone="tealToLime"
          className="mt-12 font-bungee"
          onClick={resetGame}
        >
          Reiniciar Juego
        </Button>
        <Button
          gradientDuoTone="tealToLime"
          className="ml-3 mt-12 font-bungee"
          onClick={stopGame}
        >
          Volver al Menu Principal
        </Button>
      </div>
    </div>
  );
};
