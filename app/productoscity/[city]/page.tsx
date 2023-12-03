import GoBack from '@/components/Buttons/GoBack';
import ListCard from '@/components/ListCard/ListCard';
// import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
// import React from 'react';
import { use } from 'react';

export default function Page({ params }) {
  const getProductPosts = async () => {
    const productPosts = await prisma.post.findMany({
      where: {
        categoryName: 'Productos',
        city: params.city,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: { imageUrl: true },
    });

    return productPosts.map((post) => ({
      post,
      imageUrls: post.imageUrl.flatMap((image) => image.url),
    }));
    // return productPosts;
  };
  const productPosts = use(getProductPosts());
  // console.log('productPosts', productPosts);

  return (
    <section className="filtered-section">
      <GoBack />
      <main>
        {/* @ts-ignore */}
        {productPosts.map((post) => (
          <ListCard key={post.post.id} post={post} />
        ))}
      </main>
    </section>
  );
}
