import { Button, Modal } from "flowbite-react";

interface Props {
  show: boolean;
  children: JSX.Element;
  onReset(): void;
}

export const GameOverModal = ({ show, children, onReset }: Props) => {
  return (
    <Modal size="sm" position="top-right" show={show} onClose={onReset}>
      <Modal.Header>
        <span className="font-bungee-spice">Has ganado!</span>
      </Modal.Header>
      <Modal.Body>
        {children}
        <div className="mt-6 flex justify-end text-sm font-medium text-gray-500 dark:text-gray-300">
          <Button
            onClick={onReset}
            gradientDuoTone="tealToLime"
            className="font-bungee"
          >
            Otra vez!
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
