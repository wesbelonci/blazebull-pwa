import React, { PropsWithChildren, useCallback, useState } from "react";
import { AnimatedTransictionPage } from "../../components/modules/AnimatedTransictonPage";
import { Content } from "./content";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Loading } from "../../components/elements/Loading";
import { Container, App } from "./styles";
// import { PwaInstallAlert } from "../../components/modules/PwaInstallAlert";

const Layout: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const handleActiveSidebarHeader = useCallback(() => {
    setSidebarActive(!sidebarActive);
  }, [sidebarActive]);

  return (
    <AnimatedTransictionPage>
      <Loading />
      <Container>
        <App>
          <Header setActiveSidebar={handleActiveSidebarHeader} />
          <Sidebar
            setActiveSidebar={handleActiveSidebarHeader}
            active={sidebarActive}
          />
          <Content>{children}</Content>
        </App>
      </Container>
    </AnimatedTransictionPage>
  );
};

export { Layout };
