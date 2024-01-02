import { useState } from "react";

export interface SelectorValue {
  id: string;
  selected: boolean;
  color?: "blue" | "red";
}

interface Props {
  value: SelectorValue;
}

export const Selector = (props: Props) => {
  const [value, setValue] = useState(props.value);

  const handleClick = () => {
    setValue({
      id: props.value.id,
      selected: true,
      color: "red",
    });
    console.log(`Se ha seleccionado el casillero ${value.id}, color: red`);
  };

  let bgColor = `bg-fuchsia-200 hover:bg-fuchsia-300`;
  if (value.selected) {
    if (value.color === "blue") {
      bgColor = `bg-blue-400`;
    } else {
      bgColor = `bg-red-600`;
    }
  }

  return (
    <div
      id={value.id}
      className={`rounded-full shadow-lg h-24 ${bgColor}`}
      onClick={handleClick}
    ></div>
  );
};
