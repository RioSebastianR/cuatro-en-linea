import { AvatarOption } from "./AvatarOption";

export const AvatarSelector = () => {
  return (
    <div className="bg-white sm:py-12 mt-12 mb-6">
      <div className="w-full">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Elige tu Avatar ganador!
        </h2>
      </div>

      <div className="grid gap-x-4 gap-y-2 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 p-12">
        <AvatarOption />
        <AvatarOption />
        <AvatarOption />
        <AvatarOption />
        <AvatarOption />
        <AvatarOption />
      </div>
    </div>
  );
};
