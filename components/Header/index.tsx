import React from "react";
import * as S from "./styles";
import Logo from "components/Logo";

interface Props { }

const Header: React.FC<Props> = () => {
  return (
    <S.Container>
      <S.StyledLink as="a" href="/">
        <Logo size={1.4} />
      </S.StyledLink>
    </S.Container>
  );
};

export default Header;
