import React from 'react';
import * as S from './styles';
import PostInfo from 'interfaces/Post';
import PostItem from 'components/PostItem';


interface Props {
  posts: PostInfo[];
}

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <S.Container>
      {posts.map(post => (
        <S.Item key={post.id}>
          <PostItem {...post} />
        </S.Item>
      ))}
    </S.Container>
  );
}

export default PostsList;