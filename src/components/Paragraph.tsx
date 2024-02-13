import { ReactNode } from "react";

type ParagraphType = {
  type: "paragraph-1" | "paragraph-2";
  children: ReactNode;
};

function Paragraph({ type, children }: ParagraphType) {
  return <p className={type}>{children}</p>;
}

export default Paragraph;
