import React, { useState } from 'react';
import * as S from './styles'

interface Props {

}

const Nav: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container onClick={() => setIsOpen(!isOpen)}>
      <img src="/menu.svg" />

      {isOpen && (
        <S.Box>
          <S.List>
            <S.ListItem><a href="#">Início</a></S.ListItem>
            <S.ListItem><a href="#">Contatos</a></S.ListItem>
            <S.ListItem><a href="#">Sobre</a></S.ListItem>
          </S.List>
        </S.Box>
      )}
    </S.Container>
  );
}

export default Nav;