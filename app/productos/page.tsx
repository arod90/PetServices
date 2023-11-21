import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
import React from 'react';

const getProductPosts = async () => {
  const groomingPosts = prisma.post.findMany({
    where: {
      categoryName: 'productos',
    },
  });
  return groomingPosts;
};

const page = async () => {
  const productPosts = await getProductPosts();
  return (
    <section>
      <main>
        {/* @ts-ignore */}
        {productPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </section>
  );
};

export default page;
