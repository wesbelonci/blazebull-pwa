import React from "react";
import { Container } from "./styles";

interface ContentProps {
  children: JSX.Element;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { Content };
