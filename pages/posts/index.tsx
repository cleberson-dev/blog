import React from "react";
import Wrapper from "components/Wrapper";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import SectionTitle from "components/SectionTitle";
import PostsList from "components/PostsList";
import PostInfo from "../../interfaces/Post";
import Pagination from "components/Pagination";
import styled from "styled-components";
import Layout from "components/Layout";

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
    <Layout>
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
  const postsPath = path.join(process.cwd(), "posts");

  const postFilenames = fs.readdirSync(postsPath);

  const posts = postFilenames.map((filename) => {
    const markdown = fs.readFileSync(path.join(postsPath, filename)).toString();
    const { data } = matter(markdown);

    return { id: filename.replace(".md", ""), ...data };
  });

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
