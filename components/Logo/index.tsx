import React from 'react';
import * as S from './styles';

interface Props {
  size?: number;
}

const Logo: React.FC<Props> = ({ size = 1 }) => {
  return (
    <S.Container size={size}>
      Cleberson
      <S.Extension>.blog</S.Extension>
    </S.Container>
  );
}

export default Logo;