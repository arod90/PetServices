import GoBack from '@/components/Buttons/GoBack';
import FilterBar from '@/components/FilterBar/FilterBar';
import ListCard from '@/components/ListCard/ListCard';
import { FilterContext } from '@/utils/FilterContext';

import { prisma } from '@/utils/db';
import React from 'react';

// @ts-ignore
const page = async ({ params }) => {
  console.log(params);

  //@ts-ignore
  const getFilteredPosts = async () => {
    const filteredPosts = await prisma.post.findMany({
      where: {
        categoryName: 'Veterinarios',
        city: params.city,
      },
    });
    return filteredPosts;
  };

  // TODO! Implement go back button, see code below

  const groomingPosts = await getFilteredPosts();
  return (
    <section className="filtered-section">
      <GoBack />
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
