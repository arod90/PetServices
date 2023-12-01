import ListCard from '@/components/ListCard/ListCard';
import { prisma } from '@/utils/db';
import React from 'react';

const getVetPosts = async () => {
  const groomingPosts = prisma.post.findMany({
    where: {
      categoryName: 'veterinarios',
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return groomingPosts;
};

const page = async () => {
  //TODO Look into framer motion for animations
  //TODO add pagination
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
