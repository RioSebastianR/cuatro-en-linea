import { useContext } from "react";
import { TeamEnum } from "./TeamEnum";
import Avatar, { genConfig } from "react-nice-avatar";
import { GameContext } from "../../contexts/GameContext";

export const CardTeamWinner = () => {
  const { winner } = useContext(GameContext);
  const config = genConfig({ mouthStyle: "laugh" });
  const bgColorTeam = winner === TeamEnum.A ? "bg-red-600" : "bg-blue-400";

  return (
    <div
      className={`w-full max-w-sm ${bgColorTeam} text-white border border-gray-200 rounded-lg shadow `}
    >
      <div className="flex flex-col items-center p-4 md:p-8">
        <Avatar style={{ width: "6rem", height: "6rem" }} {...config} />
        <h5 className="mb-1 mt-2 pt-2 text-xl font-medium text-gray-900 dark:text-white font-bungee">
          Bonnie Green
        </h5>
        <span className={`text-sm text-white`}>Team: {winner}</span>
      </div>
    </div>
  );
};
