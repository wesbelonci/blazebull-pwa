import React from "react";
import { Container, Navigation, Logo, Hamburguer } from "./styles";

type HeaderProps = {
  setActiveSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ setActiveSidebar }) => {
  return (
    <Container>
      <Navigation>
        <Logo>
          <img src="./assets/images/logo-white.svg" alt="Logo BazeBulls" />
        </Logo>
        <Hamburguer onClick={setActiveSidebar}>
          <img src="./assets/objects/hamburguer.svg" alt="Hamburguer" />
        </Hamburguer>
      </Navigation>
    </Container>
  );
};

export { Header };
