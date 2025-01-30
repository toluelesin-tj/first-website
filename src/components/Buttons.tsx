import { ReactNode } from "react";

// Create a Bootstrap button component
interface ButtonProps {
  children: ReactNode;
  color: string;
  onClick: () => void;
}

const Buttons = ({ children, color, onClick }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;
