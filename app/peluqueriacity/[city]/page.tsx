import GoBack from '@/components/Buttons/GoBack';
import ListCard from '@/components/ListCard/ListCard';
// import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
// import React from 'react';
import { use } from 'react';

export default function Page({ params }) {
  const getGroomingPosts = async () => {
    const groomingPosts = await prisma.post.findMany({
      where: {
        categoryName: 'Peluqueria',
        city: params.city,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: { imageUrl: true },
    });

    return groomingPosts.map((post) => ({
      post,
      imageUrls: post.imageUrl.flatMap((image) => image.url),
    }));
    // return groomingPosts;
  };
  const groomingPosts = use(getGroomingPosts());
  // console.log('groomingPosts', groomingPosts);

  return (
    <section className="filtered-section">
      <GoBack />
      <main>
        {/* @ts-ignore */}
        {groomingPosts.map((post) => (
          <ListCard key={post.post.id} post={post} />
        ))}
      </main>
    </section>
  );
}
