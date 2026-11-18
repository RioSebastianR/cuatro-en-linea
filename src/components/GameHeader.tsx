import { DarkThemeToggle } from "flowbite-react";

export const GameHeader = () => {
  return (
    <div className="flex p-3">
      <h1 className="w-full text-center text-2xl font-bungee-spice mr-6 pt-1">
        4 en linea
      </h1>
      <DarkThemeToggle />
    </div>
  );
};
