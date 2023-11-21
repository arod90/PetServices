import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
import React from 'react';

const getGroomingPosts = async () => {
  const groomingPosts = prisma.post.findMany({
    where: {
      categoryName: 'Peluqueria',
    },
  });
  return groomingPosts;
};

const page = async () => {
  const groomingPosts = await getGroomingPosts();
  return (
    <section>
      <main>
        {/* @ts-ignore */}
        {groomingPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </section>
  );
};

export default page;
