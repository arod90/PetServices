import React from 'react';
import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';

// @ts-ignore
const getPost = async (id) => {
  // const user = await getUserByClerkID();
  const entry = await prisma.post.findUnique({
    where: {
      // this syntax if for when you do a compound index, look at schema in prisma
      id: id,
    },
  });
  console.log(entry);
  return entry;
};

// @ts-ignore
const page = async ({ params }) => {
  const post = await getPost(params.id);
  return (
    <div>
      <PostCard post={post} />
      {/* <h1>{post.title}</h1> */}
    </div>
  );
};

export default page;
