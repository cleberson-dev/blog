import React from "react";
import * as S from "./styles";
import Wrapper from "components/Wrapper";
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

interface Props {
  title: string;
  category: string;
  cover: string;
  content: string;
  createdAtMs: number;
}

const PostDetails: React.FC<Props> = ({ title, category, cover, content, createdAtMs }) => {
  return (
    <S.Container>
      <S.Category>{category}</S.Category>
      <S.Cover src={cover} />
      <Wrapper>
        <S.Title>{title}</S.Title>
        <S.Date>
          <img src="/calendar.svg" alt="Ícone de data" /> {format(new Date(createdAtMs), "dd 'de' LLLL 'de' yyyy", { locale: ptBR })}
        </S.Date>
        <S.Content dangerouslySetInnerHTML={{ __html: content }} />
      </Wrapper>
    </S.Container>
  );
};

export default PostDetails;
