import ListCard from '@/components/ListCard/ListCard';

import { prisma } from '@/utils/db';
import React from 'react';

const page = async () => {
  // const { city } = useContext(FilterContext);
  const getGroomingPosts = async () => {
    const groomingPosts = await prisma.post.findMany({
      where: {
        categoryName: 'Peluqueria',
      },
    });
    return groomingPosts;
  };

  const groomingPosts = await getGroomingPosts();
  return (
    <section>
      <main>
        {/* @ts-ignore */}
        {groomingPosts.map((post) => (
          <ListCard key={post.id} post={post} />
        ))}
      </main>
    </section>
  );
};

export default page;
