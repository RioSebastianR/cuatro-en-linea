type Props = {
  children: JSX.Element;
};

export const Main = ({ children }: Props) => {
  return <div className="min-h-full">{children}</div>;
};
