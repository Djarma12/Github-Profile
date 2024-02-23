import { MouseEventHandler, ReactNode } from "react";

type ButtonType = {
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

function Button({ onClick, className, children }: ButtonType) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
