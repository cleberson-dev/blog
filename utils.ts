import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import path from "path";
import featured from "./featured.json";
import parse from "date-fns/parse";

interface MarkdownMetadata {
  id: string;
  title: string;
  category: string;
  cover: string;
  createdAtMs: number;
  description?: string;
}

export const getPostsPath = () => path.join(process.cwd(), "posts");
export const getPostPath = (slug: string) =>
  path.join(getPostsPath(), slug + ".md");

export const getPostsMetadata = () => {
  const postsPath = getPostsPath();
  const postsFilenames = fs.readdirSync(postsPath);

  return postsFilenames.map((name) =>
    getMarkdownMetadata(path.join(postsPath, name))
  );
};

export const getMarkdownFilename = (path: string): string => {
  const pattern = /[\w,\s-]+\.md$/;

  if (!pattern.test(path)) throw Error("Não é um slug válido");

  const result = path.match(pattern)
    ? (path.match(pattern) as RegExpMatchArray)[0]
    : "";
  return result;
};

export const getMarkdownMetadata = (path: string): MarkdownMetadata => {
  const markdownFile = fs.readFileSync(path).toString();
  const { data } = matter(markdownFile);

  const markdownFilename = getMarkdownFilename(path);
  const slug = markdownFilename.replace(".md", "");

  return {
    id: slug,
    title: data.title,
    category: data.category,
    cover: data.cover,
    createdAtMs: parse(data.date, "dd'/'LL'/'yyyy", new Date()).getTime(),
    description: data.description
  };
};

export const getMarkdownHtml = (path: string): string => {
  const markdownFile = fs.readFileSync(path).toString();
  const { content } = matter(markdownFile);

  return marked(content);
};

export const getFeaturedPosts = () => {
  return featured.map((slug) => getMarkdownMetadata(getPostPath(slug)));
};
