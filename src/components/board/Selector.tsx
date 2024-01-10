import { BoardValue } from "../../data/defaultValues";
import { TeamEnum } from "./TeamEnum";

interface Props {
  value: BoardValue;
}

export const Selector = ({ value }: Props) => {
  let bgColor = `bg-fuchsia-200 hover:bg-fuchsia-300`;
  if (value.team) {
    if (value.team === TeamEnum.A) {
      bgColor = `bg-red-600 border-2 border-black border-solid`;
    } else {
      bgColor = `bg-blue-400 border-2 border-black border-solid`;
    }
  }

  const pendingStatus = value.team ? "" : `animate-pulse`;

  return (
    <div
      className={`mx-auto ${pendingStatus} rounded-full shadow-lg md:w-24 md:h-24 sm:w-16 sm:h-16 w-12 h-12 ${bgColor}`}
    />
  );
};
