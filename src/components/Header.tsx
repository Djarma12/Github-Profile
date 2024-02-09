import { ReactNode } from "react";

type HeaderType = {
  children: ReactNode;
};

function Header({ children }: HeaderType) {
  return <div className="header">{children}</div>;
}

export default Header;
