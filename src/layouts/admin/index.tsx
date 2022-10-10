import React, {
  PropsWithChildren,
  useCallback,
  useState,
  useEffect,
} from "react";
import { AnimatedTransictionPage } from "../../components/modules/AnimatedTransictonPage";
import { Content } from "./content";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Container, App } from "./styles";

const Layout: React.FC<PropsWithChildren<any>> = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(() => {
    const active = localStorage.getItem("@blazebull:sidebar");

    if (active) {
      return JSON.parse(active);
    }

    return true;
  });

  const getWindowDimensions = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = window;

    return {
      width,
      height,
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getWindowDimensions]);

  useEffect(() => {
    const { width } = getWindowDimensions();

    if (width <= 991.98) {
      localStorage.setItem("@blazebull:sidebar", JSON.stringify(false));
      setSidebarActive(false);
    }
  }, [getWindowDimensions]);

  const handleActiveSidebarHeader = useCallback(() => {
    localStorage.setItem("@blazebull:sidebar", JSON.stringify(!sidebarActive));
    setSidebarActive(!sidebarActive);
  }, [sidebarActive]);

  const handleActiveSidebarContent = useCallback(() => {
    const { width } = getWindowDimensions();
    if (sidebarActive === true && width <= 991.98) {
      localStorage.setItem("@blazebull:sidebar", JSON.stringify(false));
      setSidebarActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidebarActive]);

  return (
    <AnimatedTransictionPage>
      <Container>
        <App>
          <Header setActiveSidebar={handleActiveSidebarHeader} />
          <Sidebar
            setActiveSidebar={handleActiveSidebarHeader}
            active={sidebarActive}
          />
          <Content setActiveHeader={handleActiveSidebarContent}>
            {children}
          </Content>
        </App>
      </Container>
    </AnimatedTransictionPage>
  );
};

export { Layout };
