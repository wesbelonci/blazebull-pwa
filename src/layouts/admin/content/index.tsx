import React from "react";
import { Container } from "./styles";

interface ContentProps {
  // headerActive: boolean;
  setActiveHeader: () => void;
  children: JSX.Element;
}

const Content: React.FC<ContentProps> = ({ setActiveHeader, children }) => {
  return <Container onClick={() => setActiveHeader()}>{children}</Container>;
};

export { Content };
