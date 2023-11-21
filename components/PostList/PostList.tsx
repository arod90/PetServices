import React from 'react';
import './PostList.css';
// import CategoryBar from '../CategoryBar/CategoryBar';
import PostCard from '../PostCard/PostCard';

const PostList = async ({ posts }: any) => {
  return (
    <section>
      {/* <CategoryBar /> */}
      <main>
        {/* @ts-ignore */}
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </section>
  );
};

export default PostList;
