/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdPerson, MdClear } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/AuthContext";

import { Container, Link } from "./styles";

interface DropdownProps {
  visible: boolean;
}

type Ref = HTMLDivElement;

const DropdownUser = React.forwardRef<Ref, DropdownProps>(
  ({ visible }, ref) => {
    const { signOut } = useAuth();

    const navigate = useNavigate();

    return (
      <Container ref={ref} className={visible ? "show" : ""}>
        <Link onClick={() => navigate("/profile")}>
          <span>Perfil</span>
          <MdPerson size={20} />
        </Link>
        <Link onClick={() => signOut()}>
          <span>Sair da Plataforma</span>
          <MdClear size={20} />
        </Link>
      </Container>
    );
  }
);

export { DropdownUser };
