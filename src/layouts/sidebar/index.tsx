import React from "react";
import {
  Container,
  Header,
  BackButton,
  LogOutButton,
  UserInfo,
  Avatar,
  Verified,
  BetsInfo,
  BetInfoDetail,
  Nav,
  NavList,
  NavItem,
  Icon,
} from "./styles";
import { FiChevronLeft, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

type SidebarProps = {
  active: boolean;
  setActiveSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ active, setActiveSidebar }) => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

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

      <UserInfo>
        <Avatar>
          <img
            src="https://www.rgvl.com.br/wp-content/themes/baita-site-child/assets/images/avatars/user-avatar.png"
            alt=""
          />
          <Verified>
            <img src="/assets/objects/verificado.svg" alt="" />
          </Verified>
        </Avatar>

        <div className="flex w-full flex-col h-auto items-center">
          <span className="font-normal text-white py-1 mt-2">{user?.name}</span>
          <span className="font-light text-sm text-light-grey-two">
            {user?.email}
          </span>

          <div className="flex w-full flex-row justify-center py-1">
            <span className="text-white text-sm">Status de Assinatura:</span>
            <span className="text-lime-green text-sm px-1">Ativo</span>
          </div>
        </div>
      </UserInfo>
      <BetsInfo>
        <BetInfoDetail>
          <span className="text-white">5364</span>
          <span className="font-bold text-white">Entradas</span>
        </BetInfoDetail>
        <BetInfoDetail>
          <span className="text-white">128</span>
          <span className="font-bold text-white">Perdas</span>
        </BetInfoDetail>
        <BetInfoDetail>
          <span className="text-white">5236</span>
          <span className="font-bold text-white">Ganhos</span>
        </BetInfoDetail>
      </BetsInfo>
      <Nav className="sidebar-nav">
        <NavList>
          <NavItem onClick={() => navigate("/home")}>
            <Icon>
              <img src="/assets/objects/home.svg" alt="Home" />
            </Icon>
            <span>Home</span>
          </NavItem>
          <NavItem onClick={() => navigate("/classroom")}>
            <Icon>
              <img src="/assets/objects/curso.svg" alt="Curso" />
            </Icon>
            <span>Curso</span>
          </NavItem>
          <NavItem onClick={() => navigate("/room-crash")}>
            <Icon>
              <img src="/assets/objects/crash.svg" alt="Crash" />
            </Icon>
            <span>Crash</span>
          </NavItem>
          <NavItem onClick={() => navigate("/room-double")}>
            <Icon>
              <img src="/assets/objects/double.svg" alt="Double" />
            </Icon>
            <span>Double</span>
          </NavItem>
          {/* <NavItem>
            <Icon>
              <img
                src="/assets/objects/indique-ganhe.svg"
                alt="Indique e Ganhe"
              />
            </Icon>
            <span>Indique e Ganhe</span>
          </NavItem> */}
          <NavItem>
            <Icon>
              <img
                src="/assets/objects/gerenciador.svg"
                alt="Gerenciador de Banca"
              />
            </Icon>
            <span>Gerenciador de Banca</span>
          </NavItem>
          <NavItem onClick={() => navigate("/settings")}>
            <Icon>
              <img src="/assets/objects/config.svg" alt="Configuraçoes" />
            </Icon>
            <span>Configurações</span>
          </NavItem>
          <NavItem>
            <Icon>
              <img src="/assets/objects/suporte.svg" alt="Suporte" />
            </Icon>
            <span>Suporte</span>
          </NavItem>
        </NavList>
      </Nav>
    </Container>
  );
};

export { Sidebar };
