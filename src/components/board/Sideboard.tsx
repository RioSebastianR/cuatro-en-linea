import { CardTeam } from "./CardTeam";
import { DarkThemeToggle } from "flowbite-react";
import { TeamEnum } from "./TeamEnum";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

export const Sideboard = () => {
  const { currentTurn, winner } = useContext(GameContext);

  return (
    <div className="mx-auto md:basis-1/4 basis-4/4 p-6 md:p-6 sm:px-6 lg:px-8 text-white">
      <div className="m-6 flex justify-end">
        <h1 className="w-full text-center text-2xl font-bungee-spice">
          4 en linea
        </h1>
        <DarkThemeToggle />
      </div>
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
    </div>
  );
};
