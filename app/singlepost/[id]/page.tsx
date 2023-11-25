import React from 'react';
import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
import GoBack from '@/components/Buttons/GoBack';

// @ts-ignore
const getPost = async (id) => {
  const entry = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  console.log(entry);
  return entry;
};

// @ts-ignore
const page = async ({ params }) => {
  console.log(params);

  const post = await getPost(params.id);
  return (
    <section className="single-post-section">
      <GoBack />
      <PostCard post={post} />
    </section>
  );
};

export default page;
