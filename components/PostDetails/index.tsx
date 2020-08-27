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
        {/* <S.Content>
          <p>
            Você já ouviu falar sobre{" "}
            <a href="https://www.typescriptlang.org/">TypeScript</a>? Trata-se
            de uma ferramenta que permite escrever um código, fazendo
            programações orientadas a objetos sem perder suas vantagens. Ao
            compilar um código TypeScript, é gerado um código JavaScript, e esse
            código é o que será executado no browser (navegador).
          </p>
          <h2>O que é TypeScript?</h2>
          <p>
            Entre os principais elementos básicos que tornam essa construção
            muito importante, podemos citar templates, componentes, roteamento,
            diretivas, módulos, serviços, injeção de dependências e ferramentas
            de infraestrutura. Se você quer entender um pouco mais sobre esse
            tema, continue a leitura e saiba mais!
          </p>
          <h3>Um sub-título da hora 😂</h3>
          <p>
            Entre os principais elementos básicos que tornam essa construção
            muito importante, podemos citar templates, componentes, roteamento,
            diretivas, módulos, serviços, injeção de dependências e ferramentas
            de infraestrutura. Se você quer entender um pouco mais sobre esse
            tema, continue a leitura e saiba mais!
          </p>
          <figure>
            <img
              src="https://unsplash.com/photos/m_HRfLhgABo/download?force=true&w=640"
              alt="Ilustração"
            />
            <figcaption>Snippet de código escrito em Javascript</figcaption>
          </figure>
          <p>
            Além do TypeScript, existem outras formas de tipagem de código. No
            React, por exemplo, é possível realizar a tipagem de propriedades de
            componentes utilizando o PropTypes, um tipo de checagem de tipagem
            dinâmica que funciona em tempo de execução.
          </p>
        </S.Content> */}
      </Wrapper>
    </S.Container>
  );
};

export default PostDetails;
