import { defaultValues } from "../../data/defaultValues";
import { Selector } from "./Selector";

export const Board = () => {
  return (
    <div className="relative rounded-xl overflow-auto p-8">
      <div className="grid grid-cols-7 gap-4 font-mono text-center font-bold leading-6 bg-gray-100 rounded-lg">
        <Selector value={defaultValues.selectorA1} />
        <Selector value={defaultValues.selectorB1} />

        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
        <div className="rounded-full shadow-lg bg-fuchsia-500 h-24"></div>
      </div>
    </div>
  );
};
