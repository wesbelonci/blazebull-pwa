import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { AnimatedTransictionPage } from "../../components/modules/AnimatedTransictonPage";
import { Content } from "./content";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Loading } from "../../components/elements/Loading";
import { Container, App } from "./styles";
import { useLocation } from "react-router-dom";
import { useLoading } from "../../hooks/LoadingContext";
// import { PwaInstallAlert } from "../../components/modules/PwaInstallAlert";

const Layout: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const { pathname } = useLocation();
  const { setLoadingVisible } = useLoading();
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const handleActiveSidebarHeader = useCallback(() => {
    setSidebarActive(!sidebarActive);
  }, [sidebarActive]);

  useEffect(() => {
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
    }, 1000);
  }, [pathname, setLoadingVisible]);

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
