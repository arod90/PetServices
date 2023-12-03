import GoBack from '@/components/Buttons/GoBack';
import ListCard from '@/components/ListCard/ListCard';
// import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
// import React from 'react';
import { use } from 'react';

export default function Page({ params }) {
  const getVetPosts = async () => {
    const vetPosts = await prisma.post.findMany({
      where: {
        categoryName: 'Veterinarios',
        city: params.city,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: { imageUrl: true },
    });

    return vetPosts.map((post) => ({
      post,
      imageUrls: post.imageUrl.flatMap((image) => image.url),
    }));
    // return vetPosts;
  };
  const vetPosts = use(getVetPosts());
  // console.log('vetPosts', vetPosts);

  return (
    <section className="filtered-section">
      <GoBack />
      <main>
        {/* @ts-ignore */}
        {vetPosts.map((post) => (
          <ListCard key={post.post.id} post={post} />
        ))}
      </main>
    </section>
  );
}
