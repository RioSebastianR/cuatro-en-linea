import { useContext } from "react";
import { TeamEnum } from "./TeamEnum";
import Avatar, { genConfig } from "react-nice-avatar";
import { GameContext } from "../../contexts/GameContext";

interface Props {
  team: TeamEnum;
  isSelected: boolean;
}

export const CardTeam = ({ team, isSelected }: Props) => {
  const { winner } = useContext(GameContext);
  const config = genConfig({ mouthStyle: "peace" });
  let bgColorTeam = team === TeamEnum.A ? "bg-red-600" : "bg-blue-400";
  if (winner) {
    bgColorTeam = winner === TeamEnum.A ? "bg-red-600" : "bg-blue-400";
  }
  const bgColor = isSelected ? `${bgColorTeam} animate-pulse` : "";

  const textColor = isSelected
    ? "text-white"
    : "text-gray-500 dark:text-gray-400";

  return (
    <div
      className={`w-full max-w-sm ${bgColor}  border border-gray-200 rounded-lg shadow `}
    >
      <div className="flex flex-col items-center p-4 md:p-8">
        <Avatar style={{ width: "6rem", height: "6rem" }} {...config} />
        <h5 className="mb-1 mt-2 pt-2 text-xl font-medium text-gray-900 dark:text-white font-bungee">
          Bonnie Green
        </h5>
        <span className={`text-sm ${textColor}`}>Team: {team}</span>
      </div>
    </div>
  );
};
