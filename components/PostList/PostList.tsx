import React from 'react';
import './PostList.css';
import CategoryBar from '../CategoryBar/CategoryBar';
import { prisma } from '@/utils/db';

const getPosts = async () => {
  const getGroomPosts = await prisma.post.findMany({
    where: { category: { name: 'peluqueria' } },
  });
  return getGroomPosts;
};

const PostList = async () => {
  // const getGroomPosts = await getPosts();
  return (
    <main>
      <CategoryBar />
      <button></button>
      {/* {getGroomPosts.map((post) => (
        <>
          <h1>{post.title}</h1>
        </>
      ))} */}
    </main>
  );
};

export default PostList;
