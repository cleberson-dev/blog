import React from 'react';
import * as S from './styles';
import Logo from 'components/Logo';


interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <S.Container>
      <a href="/" style={{ textDecoration: 'none', padding: '1rem' }}>
        <Logo size={1.4} />
      </a>
    </S.Container>
  );
}

export default Header;