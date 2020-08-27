import React from 'react';
import * as S from './styles';
import Logo from 'components/Logo';
import Nav from 'components/Nav';


interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <S.Container>
      <Nav />
      <a href="/" style={{ textDecoration: 'none' }}>
        <Logo size={1.4} />
      </a>
    </S.Container>
  );
}

export default Header;