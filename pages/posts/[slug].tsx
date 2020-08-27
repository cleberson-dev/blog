import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import path from "path";
import marked from "marked";
import matter from "gray-matter";
import Header from "components/Header";
import PostDetails from "components/PostDetails";
import Wrapper from "components/Wrapper";

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
    <div>
      <Wrapper>
        <Header />
      </Wrapper>
      <PostDetails
        title={post.title}
        category={post.category}
        cover={post.cover}
        content={post.content}
        createdAtMs={post.createdAtMs}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let files;

  try {
    files = fs.readdirSync(path.join(process.cwd(), "posts"));
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
  
  const markdownPath = path.join(
    process.cwd(),
    "posts",
    (slug as string) + ".md"
  );

  const { birthtimeMs } = fs.statSync(markdownPath);
    
  const markdownFile = fs.readFileSync(markdownPath).toString();

  const parsedMarkdown = matter(markdownFile);
  const htmlString = marked(parsedMarkdown.content);

  const { data } = parsedMarkdown;

  return {
    props: {
      post: {
        title: data.title,
        category: data.category,
        cover: data.cover,
        content: htmlString,
        createdAtMs: birthtimeMs
      },
    },
  };
};

export default PostPage;
