import React from "react";
import * as S from "./styles";
import PostInfo from "interfaces/Post";
import PostCard from "components/PostCard";

interface Props {
  posts: PostInfo[];
}

const FeaturedPosts: React.FC<Props> = ({ posts }) => { 
  return (
    <S.Container>
      {posts.map((post) => (
        <S.Item key={post.id}>
          <S.Anchor href={'/posts/' + post.id}>
            <PostCard {...post} />
          </S.Anchor>
        </S.Item>
      ))}
    </S.Container>
  );
};

export default FeaturedPosts;
