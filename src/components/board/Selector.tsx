import { BoardValue } from "../../data/defaultValues";
import { TeamEnum } from "./TeamEnum";
import { transformRowColumnToNumber } from "./WinnerCombos";

interface Props {
  value: BoardValue;
}

export const Selector = ({ value }: Props) => {
  let bgColor = `bg-fuchsia-200 hover:bg-fuchsia-300`;
  if (value.team) {
    if (value.team === TeamEnum.A) {
      bgColor = `bg-red-600 border-2 border-black border-solid border-double border-8 border-white `;
    } else {
      bgColor = `bg-blue-400 border-2 border-black border-solid border-double border-8 border-white`;
    }
  }

  const pendingStatus = value.team ? "" : `animate-pulse`;
  const size = "md:w-[86px] md:h-[86px] sm:w-16 sm:h-16 w-12 h-12";

  return (
    <div
      className={`mx-auto ${pendingStatus} rounded-full shadow-lg ${bgColor} my-2 text-sm ${size} ${value?.active ? "active" : ""}`}
    >
      <div className="flex justify-center items-center h-full w-full">
        <span className="text-white font-bold">
          {value.isWinnerCombo && (
            <>
              {value.team && (
                <span className="text-yellow-200 text-2xl font-bold animate-pulse">
                  {value.team === TeamEnum.A ? "A" : "B"}
                </span>
              )}
            </>
          )}
        </span>
      </div>
    </div>
  );
};
