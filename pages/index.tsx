import React from "react";
import styled from "styled-components";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";

import Header from "../components/Header";
import FeaturedPosts from "components/FeaturedPosts";
import PostsList from "components/PostsList";
import Button from "components/Button";
import Wrapper from "../components/Wrapper";
import SectionTitle from "../components/SectionTitle";

import PostInfo from "interfaces/Post";

const CustomWrapper = styled(Wrapper)`
  & section {
    margin-top: 40px;
  }
`;

const IntroContainer = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
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

const Intro: React.FC = () => {
  return (
    <IntroContainer>
      <LeftPanel>
        <Title>Meu Blog</Title>
        <Description>
          Minhas ideias, opiniões, dicas e pensamentos on-line
        </Description>
        <a href="/posts" style={{ textDecoration: 'none' }}>
          <Button title="Leia alguma coisa" icon="/book.svg" />
        </a>
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
  return (
    <CustomWrapper>
      <Header />

      <Intro />

      <section>
        <SectionTitle>Destaques</SectionTitle>
        <FeaturedPosts posts={featuredPosts} />
      </section>

      <section>
        <SectionTitle>Alguns outros...</SectionTitle>
        <PostsList posts={posts} />
      </section>
    </CustomWrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPostsSlugs = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "featured.json")).toString()
  );
  const postsPath = path.join(process.cwd(), "posts");

  const postFilenames = fs.readdirSync(postsPath);

  const posts = postFilenames.map((filename) => {
    const markdown = fs.readFileSync(path.join(postsPath, filename)).toString();
    const { data } = matter(markdown);

    return { id: filename.replace(".md", ""), ...data };
  });

  const featuredPosts = featuredPostsSlugs.map((slug: any) =>
    posts.find((post) => post.id === slug)
  );

  return {
    props: { featuredPosts, posts: posts.slice(0, 3) },
  };
};

export default Home;
