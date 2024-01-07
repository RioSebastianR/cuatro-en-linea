import { TeamEnum } from "./TeamEnum";

interface Props {
  turn: TeamEnum;
  value: TeamEnum | null;
  index: number;
  onChange: (value: TeamEnum, index: number) => void;
}

export const Selector = ({ turn, value, index, onChange }: Props) => {
  const handleClick = () => {
    onChange(turn, index);

    console.log(`Se ha seleccionado el casillero ${value}, color: red`);
  };

  let bgColor = `bg-fuchsia-200 hover:bg-fuchsia-300`;
  if (value) {
    if (value === TeamEnum.B) {
      bgColor = `bg-blue-400 border-2 border-black border-solid`;
    } else {
      bgColor = `bg-red-600 border-2 border-black border-solid`;
    }
  }

  const pendingStatus = value ? "" : `animate-pulse`;

  return (
    <div
      className={`mx-auto ${pendingStatus} rounded-full shadow-lg md:w-24 md:h-24 sm:w-16 sm:h-16 w-12 h-12 ${bgColor}`}
      onClick={value ? undefined : handleClick}
    />
  );
};
