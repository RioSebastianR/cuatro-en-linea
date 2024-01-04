export interface SelectorValue {
  id: string;
  selected: boolean;
  row: number;
  column: number;
  color?: "blue" | "red";
}

interface Props {
  value: SelectorValue;
  onChange: (value: SelectorValue) => void;
}

export const Selector = ({ value, onChange }: Props) => {
  const handleClick = () => {
    onChange({
      id: value.id,
      row: value.row,
      column: value.column,
      selected: true,
      color: "red",
    });

    console.log(`Se ha seleccionado el casillero ${value.id}, color: red`);
  };

  let bgColor = `bg-fuchsia-200 hover:bg-fuchsia-300`;
  if (value.selected) {
    if (value.color === "blue") {
      bgColor = `bg-blue-400 border-2 border-black border-solid`;
    } else {
      bgColor = `bg-red-600 border-2 border-black border-solid`;
    }
  }

  const pendingStatus = value.selected ? "" : `animate-pulse`;

  return (
    <div
      id={value.id}
      className={`${pendingStatus} rounded-full shadow-lg md:w-24 md:h-24 w-12 h-12 ${bgColor}`}
      onClick={handleClick}
    ></div>
  );
};
