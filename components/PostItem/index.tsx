import React from 'react';
import * as S from './styles';
import categories from '../../categories.json';

interface Props {
  id: string;
  title: string;
  category: string;
  cover: string;
}

const PostItem: React.FC<Props> = ({ id, title, category, cover }) => {
  const link = '/posts/' + id;
  return (
    <S.Container>
      <S.Cover src={cover} />
      <div>
        <S.Title as="a" href={link}>{title}</S.Title>
        <S.Category>{categories[category]}</S.Category>
      </div>
    </S.Container>
  );
}

export default PostItem;