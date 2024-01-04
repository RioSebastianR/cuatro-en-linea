import { useEffect, useMemo, useState } from "react";
import { Selector, SelectorValue } from "./Selector";
import { defaultValues } from "../../data/defaultValues";

export const Board = () => {
  // Estado general del tablero: todos los selectores
  const [board, setBoard] = useState(defaultValues);

  // Funcion que sirve para actualizar el estado general del tablero, recibe el selector que se acaba de actualizar

  const isAWinner = useMemo((): boolean => {
    const isAWinnnerHorizontal =
      board.selectorA1.selected &&
      board.selectorA2.selected &&
      board.selectorA3.selected &&
      board.selectorA4.selected;

    const isAWinnerVertical =
      board.selectorA1.selected &&
      board.selectorB1.selected &&
      board.selectorC1.selected &&
      board.selectorD1.selected;

    const isAWinnerDiagonal =
      board.selectorA1.selected &&
      board.selectorB2.selected &&
      board.selectorC3.selected &&
      board.selectorD4.selected;

    if (isAWinnnerHorizontal || isAWinnerVertical || isAWinnerDiagonal) {
      return true;
    }
    return false;
  }, [board]);

  const handleChange = (selectorValueUpdated: SelectorValue): void => {
    const updatedValueBoard = {
      // se crea una copia del estado actual y asi mantengo los valores anteriores
      ...board,
      // se sobreescribe el valor para el id del selector actualizado, solo el que cambio
      [selectorValueUpdated.id]: selectorValueUpdated,
    };
    setBoard(updatedValueBoard);
  };

  useEffect(() => {
    console.log(`Is a winner: ${isAWinner}`);
    if (isAWinner) {
      alert("Has ganado ..!!");
    }
  }, [isAWinner]);

  useEffect(() => {
    console.log("Se ejecuto el useEffect sin dependencias");
  }, []);

  return (
    <div className="relative rounded-xl overflow-auto p-4 md:p-2">
      <div className="grid grid-cols-7 gap-4 font-mono text-center font-bold leading-6 bg-gray-100 rounded-lg p-4">
        <Selector value={board.selectorA1} onChange={handleChange} />
        <Selector value={board.selectorA2} onChange={handleChange} />
        <Selector value={board.selectorA3} onChange={handleChange} />
        <Selector value={board.selectorA4} onChange={handleChange} />
        <Selector value={board.selectorA5} onChange={handleChange} />
        <Selector value={board.selectorA6} onChange={handleChange} />
        <Selector value={board.selectorA7} onChange={handleChange} />

        <Selector value={board.selectorB1} onChange={handleChange} />
        <Selector value={board.selectorB2} onChange={handleChange} />
        <Selector value={board.selectorB3} onChange={handleChange} />
        <Selector value={board.selectorB4} onChange={handleChange} />
        <Selector value={board.selectorB5} onChange={handleChange} />
        <Selector value={board.selectorB6} onChange={handleChange} />
        <Selector value={board.selectorB7} onChange={handleChange} />

        <Selector value={board.selectorC1} onChange={handleChange} />
        <Selector value={board.selectorC2} onChange={handleChange} />
        <Selector value={board.selectorC3} onChange={handleChange} />
        <Selector value={board.selectorC4} onChange={handleChange} />
        <Selector value={board.selectorC5} onChange={handleChange} />
        <Selector value={board.selectorC6} onChange={handleChange} />
        <Selector value={board.selectorC7} onChange={handleChange} />

        <Selector value={board.selectorD1} onChange={handleChange} />
        <Selector value={board.selectorD2} onChange={handleChange} />
        <Selector value={board.selectorD3} onChange={handleChange} />
        <Selector value={board.selectorD4} onChange={handleChange} />
        <Selector value={board.selectorD5} onChange={handleChange} />
        <Selector value={board.selectorD6} onChange={handleChange} />
        <Selector value={board.selectorD7} onChange={handleChange} />

        <Selector value={board.selectorF1} onChange={handleChange} />
        <Selector value={board.selectorF2} onChange={handleChange} />
        <Selector value={board.selectorF3} onChange={handleChange} />
        <Selector value={board.selectorF4} onChange={handleChange} />
        <Selector value={board.selectorF5} onChange={handleChange} />
        <Selector value={board.selectorF6} onChange={handleChange} />
        <Selector value={board.selectorF7} onChange={handleChange} />

        <Selector value={board.selectorG1} onChange={handleChange} />
        <Selector value={board.selectorG2} onChange={handleChange} />
        <Selector value={board.selectorG3} onChange={handleChange} />
        <Selector value={board.selectorG4} onChange={handleChange} />
        <Selector value={board.selectorG5} onChange={handleChange} />
        <Selector value={board.selectorG6} onChange={handleChange} />
        <Selector value={board.selectorG7} onChange={handleChange} />
      </div>
    </div>
  );
};
