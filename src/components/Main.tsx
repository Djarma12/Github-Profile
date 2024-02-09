import { ReactNode } from "react";

type MainType = {
  children: ReactNode;
};

function Main({ children }: MainType) {
  return <main className="main">{children}</main>;
}

export default Main;
