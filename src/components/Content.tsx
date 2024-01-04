import { useSpring, animated } from "@react-spring/web";

import { Board } from "./board/Board";
// import { Navbar } from "./../components/Navbar";

export const Content = () => {
  const springs = useSpring({
    from: { y: -500 },
    to: { y: 0 },
  });

  return (
    <>
      <main>
        <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8 sm:ml-64">
          {/* <Navbar /> */}
          {/* <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
        <div className="not-prose relative bg-gray-100 rounded-xl overflow-hidden"> */}
          {/* <div className="p-4 sm:ml-64"> */}
          <div className="p-2 md:p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <animated.div
              style={{
                ...springs,
              }}
            >
              <Board />
            </animated.div>
          </div>
        </div>
      </main>
    </>
  );
};
