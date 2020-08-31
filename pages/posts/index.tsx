import React from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import Wrapper from "components/Wrapper";
import Layout from "components/Layout";
import SectionTitle from "components/SectionTitle";
import Pagination from "components/Pagination";
import PostsList from "components/PostsList";

import PostInfo from "../../interfaces/Post";
import { getPostsMetadata } from "utils";

interface Props {
  posts: PostInfo[];
}

const Title = styled(SectionTitle)`
  font-weight: 800;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const PostsPage: React.FC<Props> = ({ posts }) => {
  const router = useRouter();

  let currentPage = Number(router.query.p);
  currentPage = Number.isNaN(currentPage) ? 1 : currentPage;
  const postsPerPage = 10;

  const getPosts = () =>
    posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <Layout
      pageTitle="Meus posts"
      pageDescription="Minhas publicações, contendo diversos tópicos como: Tecnologia, Programação, Inglês, Música, Pessoal, etc..."
    >
      <Wrapper>
        <main>
          <Title>Minhas publicações</Title>
          <PostsList posts={getPosts()} />
          <Pagination
            currentPage={currentPage}
            itemsPerPage={postsPerPage}
            totalItems={posts.length}
          />
        </main>
      </Wrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: getPostsMetadata()
    },
  };
};

export default PostsPage;
