import React from "react";
import { Container, Header, BackButton, LogOutButton } from "./styles";
import { FiChevronLeft, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks/AuthContext";

type SidebarProps = {
  active: boolean;
  setActiveSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ active, setActiveSidebar }) => {
  const { signOut } = useAuth();
  return (
    <Container className={`${active ? "show" : ""}`}>
      <Header>
        <BackButton onClick={setActiveSidebar}>
          <FiChevronLeft size={25} />
        </BackButton>
        <LogOutButton onClick={signOut}>
          <span>Sair</span>
          <FiLogOut size={22} />
        </LogOutButton>
      </Header>
    </Container>
  );
};

export { Sidebar };
