interface Props {
  index: number;
}

export const SelectorColumn = ({ index }: Props) => {
  const bgColor = `bg-yellow-200 hover:bg-yellow-300`;

  return (
    <div
      key={index}
      className={`mx-auto rounded-full shadow-lg md:w-12 md:h-12 sm:w-12 sm:h-12 w-12 h-12 ${bgColor} animate-pulse`}
    />
  );
};
