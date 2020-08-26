import React from 'react';
import * as S from './styles';
import Logo from 'components/Logo';


interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <S.Container>
      <div>a</div>
      <Logo size={1.4} />
      <div>a</div>
    </S.Container>
  );
}

export default Header;