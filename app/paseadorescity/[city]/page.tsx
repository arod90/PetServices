import ListCard from '@/components/ListCard/ListCard';
// import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
// import React from 'react';
import { use } from 'react';
import GoBack from '@/components/Buttons/GoBack';

export default function Page({ params }) {
  const getWalkingPosts = async () => {
    const walkingPosts = await prisma.post.findMany({
      where: {
        categoryName: 'Paseadores',
        city: params.city,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: { imageUrl: true },
    });

    return walkingPosts.map((post) => ({
      post,
      imageUrls: post.imageUrl.flatMap((image) => image.url),
    }));
    // return groomingPosts;
  };
  const walkingPosts = use(getWalkingPosts());
  // console.log('walkingPosts', walkingPosts);

  return (
    <section className="filtered-section">
      <GoBack />
      <main>
        {/* @ts-ignore */}
        {walkingPosts.map((post) => (
          <ListCard key={post.post.id} post={post} />
        ))}
      </main>
    </section>
  );
}
