import ListCard from '@/components/ListCard/ListCard';
import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
import React from 'react';

const getVetPosts = async () => {
  const groomingPosts = prisma.post.findMany({
    where: {
      categoryName: 'veterinarios',
    },
  });
  return groomingPosts;
};

const page = async () => {
  const vetPosts = await getVetPosts();
  return (
    <section>
      <main>
        {/* @ts-ignore */}
        {vetPosts.map((post) => (
          <ListCard key={post.id} post={post} />
        ))}
      </main>
    </section>
  );
};

export default page;
