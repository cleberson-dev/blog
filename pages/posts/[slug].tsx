import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import PostDetails from "components/PostDetails";
import Layout from "components/Layout";
import { getPostPath, getMarkdownMetadata, getMarkdownHtml, getPostsPath } from "utils";

interface Props {
  post: Post;
}

interface Post {
  title: string;
  content: string;
  category: string;
  cover: string;
  createdAtMs: number;
}

const PostPage: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      <main>
        <PostDetails
          title={post.title}
          category={post.category}
          cover={post.cover}
          content={post.content}
          createdAtMs={post.createdAtMs}
        />
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let files;

  try {
    files = fs.readdirSync(getPostsPath());
  } catch (err) {
    console.error(err);
  }

  const paths = files
    ? files.map((file) => ({ params: { slug: file.replace(".md", "") } }))
    : [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug;

  const postPath = getPostPath(slug + "");
  const postMetadata = getMarkdownMetadata(postPath);
  const postContent = getMarkdownHtml(postPath);

  return {
    props: {
      post: {
        title: postMetadata.title,
        category: postMetadata.category,
        cover: postMetadata.cover,
        content: postContent,
        createdAtMs: postMetadata.createdAtMs,
      },
    },
  };
};

export default PostPage;
