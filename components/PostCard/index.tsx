import React from 'react';
import * as S from './styles';

interface Props {
  title: string;
  category: string;
  cover: string;
  dark?: boolean;
}

const PostCard: React.FC<Props> = ({ title, category, cover, dark = false }) => {
  return (
    <S.Container cover={cover} dark={dark}>
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default PostCard;