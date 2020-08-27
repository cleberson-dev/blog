import React from "react";
import Wrapper from "components/Wrapper";
import Header from "components/Header";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { useRouter } from 'next/router';
import SectionTitle from "components/SectionTitle";
import PostsList from 'components/PostsList';
import PostInfo from '../../interfaces/Post';
import Pagination from "components/Pagination";

interface Props {
  posts: PostInfo[];
}

const PostsPage: React.FC<Props> = ({ posts }) => {
  const router = useRouter();

  let currentPage = Number(router.query.p);
  currentPage = Number.isNaN(currentPage) ? 1 : currentPage;
  const postsPerPage = 10;

  const getPosts = () => posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );


  return (
    <Wrapper>
      <Header />

      <main>
        <SectionTitle>Minhas publicações</SectionTitle>
        <PostsList posts={getPosts()} />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={postsPerPage}
          totalItems={posts.length}
        />
      </main>
    </Wrapper>
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
