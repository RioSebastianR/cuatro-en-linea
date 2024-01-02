import { Board } from "./board/Board";

export const Content = () => {
  return (
    <main>
      <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
        <div className="not-prose relative bg-gray-100 rounded-xl overflow-hidden">
          <Board />
        </div>
      </div>
    </main>
  );
};
