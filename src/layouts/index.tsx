import React, { PropsWithChildren } from "react";
import { AnimatedTransictionPage } from "../components/modules/AnimatedTransictonPage";
import { Content } from "./content";
import { Header } from "./header";
// import { Sidebar } from "./sidebar";
import { Container, App } from "./styles";

const Layout: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <AnimatedTransictionPage>
      <Container>
        <App>
          <Header />
          {/* <Sidebar /> */}
          <Content>{children}</Content>
        </App>
      </Container>
    </AnimatedTransictionPage>
  );
};

export { Layout };
