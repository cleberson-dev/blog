import React from 'react';
import * as S from './styles';

interface Props {
  title: string;
  icon?: string;
}

const Button: React.FC<Props> = ({ title, icon }) => {
  return (
    <S.Container>
      {icon && <S.Icon src={icon} alt="Ícone do botão" />}
      {title}
    </S.Container>
  );
}

export default Button;