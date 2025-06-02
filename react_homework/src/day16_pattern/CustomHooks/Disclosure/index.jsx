import { useState } from "react";

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handlers = {
    open,
    close,
    toggle,
  };

  return [isOpen, handlers];
};

export default function Disclosure() {
  const [opened, handlers] = useDisclosure();
  return (
    <div>
      <button onClick={handlers.toggle}>Click Me {`${opened}`}</button>
    </div>
  );
}
