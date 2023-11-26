import ListCard from '@/components/ListCard/ListCard';
// import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
import React from 'react';

const getWalkingPosts = async () => {
  const groomingPosts = prisma.post.findMany({
    where: {
      categoryName: 'paseadores',
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return groomingPosts;
};

const page = async () => {
  const walkingPosts = await getWalkingPosts();
  return (
    <section>
      <main>
        {/* @ts-ignore */}
        {walkingPosts.map((post) => (
          <ListCard key={post.id} post={post} />
        ))}
      </main>
    </section>
  );
};

export default page;
