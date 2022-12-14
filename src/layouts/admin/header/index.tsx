import React, { useState, useCallback, useEffect } from "react";
import { DropdownUser } from "../../../components/elements/DropdownUser";
import {
  Container,
  Navigation,
  Avatar,
  Hamburguer,
  User,
  UserContent,
} from "./styles";

import HamburguerIcon from "../../../assets/hamburguer.svg";

type HeaderProps = {
  setActiveSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ setActiveSidebar }) => {
  const [dropDownVisible, setDropdownVisible] = useState<boolean>(false);
  const dropDownRef = React.useRef<HTMLDivElement>(null);

  const handleCloseDropDown = useCallback((event: Event) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleCloseDropDown, true);
    return () => {
      document.removeEventListener("click", handleCloseDropDown, true);
    };
  }, [handleCloseDropDown]);

  return (
    <Container>
      <Navigation>
        <Hamburguer onClick={setActiveSidebar}>
          <img src={HamburguerIcon} alt="Hamburguer" />
        </Hamburguer>

        <UserContent>
          <User>
            <Avatar onClick={() => setDropdownVisible(!dropDownVisible)}>
              <img
                src="https://www.rgvl.com.br/wp-content/themes/baita-site-child/assets/images/avatars/user-avatar.png"
                alt=""
              />
              <DropdownUser ref={dropDownRef} visible={dropDownVisible} />
            </Avatar>
          </User>
        </UserContent>
      </Navigation>
    </Container>
  );
};

export { Header };
