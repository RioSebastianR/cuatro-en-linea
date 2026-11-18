import {
  useSpringRef,
  useSpring,
  useChain,
  config,
  animated,
} from "@react-spring/web";

import { useCallback, useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import styles from "./../board/styles.module.css";

export const StartGameButton = ({ onStart }: { onStart: () => void }) => {
  const { started, startGame } = useContext(GameContext);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "30%", background: "white" },
    to: {
      size: started ? "100%" : "30%",
      background: started ? "white" : "hotpink",
    },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain([springApi], [0, started ? 0.1 : 0.6]);

  const handleClickStartGame = useCallback(() => {
    startGame();
    onStart();
  }, [onStart, startGame]);

  return (
    <animated.div
      style={{ ...rest, width: size, height: size }}
      className={`${styles.container} mt-3`}
      onClick={handleClickStartGame}
    >
      <button className="rounded-lg text-center w-full font-bungee py-3">
        Comenzar Juego!
      </button>
    </animated.div>
  );
};
