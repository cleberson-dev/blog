import React from "react";
import * as S from "./styles";

interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({
  itemsPerPage,
  totalItems,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const existPrevious = currentPage > 1;
  const existNext = currentPage < totalPages;

  const prevPageUrl = `?p=${currentPage - 1}`;
  const nextPageUrl = `?p=${currentPage + 1}`;

  return (
    <S.Container>
      <S.NavButtons>
      {existPrevious && (
        <S.PrevLinkButton href={prevPageUrl} className="prevPage">
          <img alt="Ícone de Próxima página" src='/arrow.svg' />
        </S.PrevLinkButton>
      )}

      {existNext && (
        <S.NextLinkButton href={nextPageUrl} className="nextPage">
          <img alt="Ícone de Próxima página" src='/arrow.svg' />
        </S.NextLinkButton>
        )}
      </S.NavButtons>

      <S.Text>
        Página {currentPage} de {totalPages}
      </S.Text>
      <S.Text>
        {itemsPerPage} itens por página
      </S.Text>
      <S.Text>
        {totalItems} itens totais
      </S.Text>
    </S.Container>
  );
};

export default Pagination;
