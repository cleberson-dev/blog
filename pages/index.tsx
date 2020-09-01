import React from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";
import Link from "next/link";

import FeaturedPosts from "components/FeaturedPosts";
import PostsList from "components/PostsList";
import Button from "components/Button";
import Wrapper from "../components/Wrapper";
import SectionTitle from "../components/SectionTitle";

import PostInfo from "interfaces/Post";
import Layout from "components/Layout";
import { getFeaturedPosts, getPostsMetadata } from "utils";

const CustomWrapper = styled(Wrapper)`
  & section {
    margin-top: 40px;
  }
`;

const IntroContainer = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 28px;
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
`;

const LeftPanel = styled.div`
  & p {
    color: #606f7b;
    font-weight: 600;
  }
`;

const Illustration = styled.img`
  height: 249px;
`;

const MorePostsText = styled.p`
  font-size: 1.4rem;
  font-weight: 800;

  a {
    color: #fc5f89;
  }
`;

const Intro: React.FC = () => {
  return (
    <IntroContainer>
      <LeftPanel>
        <Title>Meu Blog</Title>
        <Description>
          Minhas ideias, opiniões, dicas e pensamentos on-line
        </Description>
        <Link href="/posts" style={{ textDecoration: "none" }}>
          <Button title="Leia alguma coisa" icon="/book.svg" />
        </Link>
      </LeftPanel>
      <Illustration src="/illustration.png" alt="Ilustração" />
    </IntroContainer>
  );
};

interface Props {
  posts: PostInfo[];
  featuredPosts: PostInfo[];
}

const Home: React.FC<Props> = ({ posts, featuredPosts }) => {
  const pageDescription =
    "Lugar para expor minhas opiniões, pensamentos, ideias sobre diversos assuntos, como também para ajudar e prover conhecimento para quem tem dificuldade, especialmente programação web.";

  return (
    <Layout pageTitle="Início" pageDescription={pageDescription}>
      <CustomWrapper>
        <Intro />

        <section>
          <SectionTitle>Destaques</SectionTitle>
          <FeaturedPosts posts={featuredPosts} />
        </section>

        <section>
          <SectionTitle>Alguns outros...</SectionTitle>
          <PostsList posts={posts} />
          <MorePostsText>
            Explore todos os meus <Link href="/posts">posts</Link>
          </MorePostsText>
        </section>
      </CustomWrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      featuredPosts: getFeaturedPosts(),
      posts: getPostsMetadata().slice(0, 3),
    },
  };
};

export default Home;
