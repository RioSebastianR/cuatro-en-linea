import ReactNiceAvatar, {
  AvatarFullConfig,
  genConfig,
} from "react-nice-avatar";
import AvatarList from "./AvatarList";
import { useState } from "react";
import { Button } from "flowbite-react";

const AVATAR_SHAPE = "circle";

export const AvatarSelector = () => {
  const [config, setConfig] = useState<AvatarFullConfig>(
    genConfig({
      isGradient: Boolean(Math.round(Math.random())),
    }),
  );

  const handleSelectConfig = (config: AvatarFullConfig) => {
    setConfig(config);
  };

  const handleConfirmAvatar = (): void => {};

  return (
    <div className="relative rounded-xl overflow-auto p-2 md:p-3">
      <div
        className={`rounded-lg bg-gradient-to-r from-blue-200 to-cyan-200 px-10 py-4`}
      >
        <div className="flex flex-col w-full justify-center text-center items-center ">
          <div className="bg-white sm:py-12 mt-5 mb-6 rounded-lg">
            <div className="w-full">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-bungee-shade">
                Elige tu Avatar ganador!
              </h2>
            </div>
            <div className="flex flex-col p-12">
              <div className="flex justify-center w-full">
                <ReactNiceAvatar
                  className="w-40 h-40 highres:w-80 highres:h-80"
                  hairColorRandom
                  shape={AVATAR_SHAPE}
                  {...config}
                />
              </div>

              <AvatarList selectConfig={handleSelectConfig} />

              <Button
                gradientDuoTone="tealToLime"
                className="font-bungee"
                onClick={handleConfirmAvatar}
              >
                Confirmar Avatar!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
