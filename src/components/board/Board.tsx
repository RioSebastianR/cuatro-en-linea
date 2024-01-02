import { defaultValues } from "../../data/defaultValues";
import { Selector } from "./Selector";

export const Board = () => {
  return (
    <div className="relative rounded-xl overflow-auto p-8">
      <div className="grid grid-cols-7 gap-4 font-mono text-center font-bold leading-6 bg-gray-100 rounded-lg">
        <Selector value={defaultValues.selectorA1} />
        <Selector value={defaultValues.selectorA2} />
        <Selector value={defaultValues.selectorA3} />
        <Selector value={defaultValues.selectorA4} />
        <Selector value={defaultValues.selectorA5} />
        <Selector value={defaultValues.selectorA6} />
        <Selector value={defaultValues.selectorA7} />

        <Selector value={defaultValues.selectorB1} />
        <Selector value={defaultValues.selectorB2} />
        <Selector value={defaultValues.selectorB3} />
        <Selector value={defaultValues.selectorB4} />
        <Selector value={defaultValues.selectorB5} />
        <Selector value={defaultValues.selectorB6} />
        <Selector value={defaultValues.selectorB7} />

        <Selector value={defaultValues.selectorC1} />
        <Selector value={defaultValues.selectorC2} />
        <Selector value={defaultValues.selectorC3} />
        <Selector value={defaultValues.selectorC4} />
        <Selector value={defaultValues.selectorC5} />
        <Selector value={defaultValues.selectorC6} />
        <Selector value={defaultValues.selectorC7} />

        <Selector value={defaultValues.selectorD1} />
        <Selector value={defaultValues.selectorD2} />
        <Selector value={defaultValues.selectorD3} />
        <Selector value={defaultValues.selectorD4} />
        <Selector value={defaultValues.selectorD5} />
        <Selector value={defaultValues.selectorD6} />
        <Selector value={defaultValues.selectorD7} />

        <Selector value={defaultValues.selectorF1} />
        <Selector value={defaultValues.selectorF2} />
        <Selector value={defaultValues.selectorF3} />
        <Selector value={defaultValues.selectorF4} />
        <Selector value={defaultValues.selectorF5} />
        <Selector value={defaultValues.selectorF6} />
        <Selector value={defaultValues.selectorF7} />

        <Selector value={defaultValues.selectorG1} />
        <Selector value={defaultValues.selectorG2} />
        <Selector value={defaultValues.selectorG3} />
        <Selector value={defaultValues.selectorG4} />
        <Selector value={defaultValues.selectorG5} />
        <Selector value={defaultValues.selectorG6} />
        <Selector value={defaultValues.selectorG7} />
      </div>
    </div>
  );
};
