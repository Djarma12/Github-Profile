import { ReactNode } from "react";

type HeadingType = {
  type: "heading-1" | "heading-2";
  children: ReactNode;
};

function Heading({ type, children }: HeadingType) {
  const Tag = type === "heading-1" ? "h1" : "h2";

  return <Tag className={type}>{children}</Tag>;
}

export default Heading;
