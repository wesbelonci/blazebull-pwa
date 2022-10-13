import React from "react";
import { Container, Navigation, Logo, Hamburguer } from "./styles";

type HeaderProps = {
  setActiveSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ setActiveSidebar }) => {
  const [boxShadow, setBoxShadow] = React.useState(false);

  const handleMenuType = React.useCallback((height: number) => {
    if (height >= 60) {
      setBoxShadow(true);
    } else {
      setBoxShadow(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      handleMenuType(window.pageYOffset);
    });
  }, [handleMenuType]);

  return (
    <Container shadow={boxShadow}>
      <Navigation>
        <Logo>
          <img src="../assets/images/logo-white.svg" alt="Logo BazeBulls" />
        </Logo>
        <Hamburguer onClick={setActiveSidebar}>
          <img src="../assets/objects/hamburguer.svg" alt="Hamburguer" />
        </Hamburguer>
      </Navigation>
    </Container>
  );
};

export { Header };
