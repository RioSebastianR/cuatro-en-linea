interface Props {
  children: JSX.Element;
  isVisible: boolean;
  onReset: () => void;
}

export const GameOverModal = ({ children, isVisible, onReset }: Props) => {
  const style = { tabIndex: -1 };
  return isVisible ? (
    <div
      {...style}
      id="deleteModal"
      aria-hidden="true"
      className={`${
        isVisible ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-2/3 left-2/3 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}
    >
      <div className=" mx-[72%] mt-[12%] relative p-4 w-full max-w-sm h-full md:h-auto">
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <button
            type="button"
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="deleteModal"
            onClick={onReset}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Cerrar</span>
          </button>

          <div className="mt-8">{children}</div>

          <p className="mb-4 text-gray-500 dark:text-gray-300 my-4">
            Has ganado!
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button
              type="button"
              className="py-2 px-3 text-sm text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900 font-bungee"
              onClick={onReset}
            >
              Otra vez!
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : undefined;
};
