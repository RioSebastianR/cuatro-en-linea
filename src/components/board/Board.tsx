import { useState } from "react";
import { Selector, SelectorValue } from "./Selector";
import { defaultValues } from "../../data/defaultValues";

export const Board = () => {
  // Estado general del tablero: todos los selectores
  const [valueBoard, setValueBoard] = useState(defaultValues);

  // Funcion que sirve para actualizar el estado general del tablero, recibe el selector que se acaba de actualizar
  const isAWinner = (selectorValueUpdated: SelectorValue): boolean => {
    if (
      valueBoard.selectorA1.selected &&
      valueBoard.selectorA2.selected &&
      valueBoard.selectorA3.selected &&
      valueBoard.selectorA4.selected
    ) {
      return true;
    }
    return false;
  };

  const handleChange = (selectorValueUpdated: SelectorValue): void => {
    const updatedValueBoard = {
      // se crea una copia del estado actual y asi mantengo los valores anteriores
      ...valueBoard,
      // se sobreescribe el valor para el id del selector actualizado, solo el que cambio
      [selectorValueUpdated.id]: selectorValueUpdated,
    };
    setValueBoard(updatedValueBoard);
    // TODO: escribir una funcion que verifique si se seleccionaron los casilleros: A1, A2, A3, A4
    const result = isAWinner(selectorValueUpdated);
    console.log(result);
    if (result) {
      alert("Has ganado ..!!");
    }
  };

  return (
    <div className="relative rounded-xl overflow-auto p-4 md:p-2">
      <div className="grid grid-cols-7 gap-4 font-mono text-center font-bold leading-6 bg-gray-100 rounded-lg p-4">
        <Selector value={valueBoard.selectorA1} onChange={handleChange} />
        <Selector value={valueBoard.selectorA2} onChange={handleChange} />
        <Selector value={valueBoard.selectorA3} onChange={handleChange} />
        <Selector value={valueBoard.selectorA4} onChange={handleChange} />
        <Selector value={valueBoard.selectorA5} onChange={handleChange} />
        <Selector value={valueBoard.selectorA6} onChange={handleChange} />
        <Selector value={valueBoard.selectorA7} onChange={handleChange} />

        <Selector value={valueBoard.selectorB1} onChange={handleChange} />
        <Selector value={valueBoard.selectorB2} onChange={handleChange} />
        <Selector value={valueBoard.selectorB3} onChange={handleChange} />
        <Selector value={valueBoard.selectorB4} onChange={handleChange} />
        <Selector value={valueBoard.selectorB5} onChange={handleChange} />
        <Selector value={valueBoard.selectorB6} onChange={handleChange} />
        <Selector value={valueBoard.selectorB7} onChange={handleChange} />

        <Selector value={valueBoard.selectorC1} onChange={handleChange} />
        <Selector value={valueBoard.selectorC2} onChange={handleChange} />
        <Selector value={valueBoard.selectorC3} onChange={handleChange} />
        <Selector value={valueBoard.selectorC4} onChange={handleChange} />
        <Selector value={valueBoard.selectorC5} onChange={handleChange} />
        <Selector value={valueBoard.selectorC6} onChange={handleChange} />
        <Selector value={valueBoard.selectorC7} onChange={handleChange} />

        <Selector value={valueBoard.selectorD1} onChange={handleChange} />
        <Selector value={valueBoard.selectorD2} onChange={handleChange} />
        <Selector value={valueBoard.selectorD3} onChange={handleChange} />
        <Selector value={valueBoard.selectorD4} onChange={handleChange} />
        <Selector value={valueBoard.selectorD5} onChange={handleChange} />
        <Selector value={valueBoard.selectorD6} onChange={handleChange} />
        <Selector value={valueBoard.selectorD7} onChange={handleChange} />

        <Selector value={valueBoard.selectorF1} onChange={handleChange} />
        <Selector value={valueBoard.selectorF2} onChange={handleChange} />
        <Selector value={valueBoard.selectorF3} onChange={handleChange} />
        <Selector value={valueBoard.selectorF4} onChange={handleChange} />
        <Selector value={valueBoard.selectorF5} onChange={handleChange} />
        <Selector value={valueBoard.selectorF6} onChange={handleChange} />
        <Selector value={valueBoard.selectorF7} onChange={handleChange} />

        <Selector value={valueBoard.selectorG1} onChange={handleChange} />
        <Selector value={valueBoard.selectorG2} onChange={handleChange} />
        <Selector value={valueBoard.selectorG3} onChange={handleChange} />
        <Selector value={valueBoard.selectorG4} onChange={handleChange} />
        <Selector value={valueBoard.selectorG5} onChange={handleChange} />
        <Selector value={valueBoard.selectorG6} onChange={handleChange} />
        <Selector value={valueBoard.selectorG7} onChange={handleChange} />
      </div>
    </div>
  );
};
