import { TurnEnum } from "./TurnEnum";
import Avatar, { genConfig } from "react-nice-avatar";

interface Props {
  team: TurnEnum;
  isSelected: boolean;
}

export const CardTeam = ({ team, isSelected }: Props) => {
  const config = genConfig({ mouthStyle: isSelected ? "laugh" : "peace" });
  const bgColorTeam = team === TurnEnum.A ? "bg-red-600" : "bg-blue-400";
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
        <h5 className="mb-1 mt-2 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className={`text-sm ${textColor}`}>Team: {team}</span>
      </div>
    </div>
  );
};
