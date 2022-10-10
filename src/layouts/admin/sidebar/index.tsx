import React, { useCallback } from "react";
import {
  Container,
  LogoContent,
  Menu,
  ContainerMenuItem,
  ItemLink,
  Image,
} from "./styles";
import { useLocation } from "react-router-dom";
// import { FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Logo from "../../../assets/logo-white.svg";
// import { IconBaseProps } from "react-icons/lib";

type SidebarProps = {
  active: boolean;
  setActiveSidebar: () => void;
};

interface SidebarItemProps {
  item: ItemProps;
}

interface ItemProps {
  title: string;
  path: string;
  icon?: any;
}

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: "/assets/objects/home.svg",
    subNav: [],
  },

  {
    title: "Usuários",
    path: "/admin/users",
    icon: "/assets/objects/indique-ganhe.svg",
  },

  {
    title: "Cursos",
    path: "/admin/courses",
    icon: "/assets/objects/curso.svg",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  return (
    <Container className={`${active ? "show" : ""}`}>
      <LogoContent>
        <Image src={Logo} alt="Logo" />
      </LogoContent>
      <Menu>
        {SidebarData.map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </Menu>
    </Container>
  );
};
const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const location = useLocation();

  const handleTabActive = useCallback(
    (name: string) => {
      if (location.pathname.includes(name)) {
        return true;
      }
      return false;
    },
    [location.pathname]
  );

  const { icon } = item;

  return (
    <ContainerMenuItem>
      <ItemLink
        href={item.path}
        className={`${handleTabActive(item.path) ? "show" : ""}`}
      >
        {/* <Icon src/> */}
        <img src={icon} alt="Icone" />
        {item.title}
        <span>
          <MdKeyboardArrowRight size={15} />
        </span>
      </ItemLink>
    </ContainerMenuItem>
  );
};

export { Sidebar };
