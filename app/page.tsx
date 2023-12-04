import FeaturedList from '@/components/FeaturedList/FeaturedList';
import { prisma } from '@/utils/db';
import { use } from 'react';

const getAllPosts = async () => {
  const featuredPosts = await prisma.post.findMany({
    take: 9,
    orderBy: {
      createdAt: 'desc',
    },
    include: { imageUrl: true },
  });
  return featuredPosts.map((post) => ({
    post,
    imageUrls: post.imageUrl.flatMap((image) => image.url),
  }));
};

export default function Home() {
  const featuredPosts = use(getAllPosts());

  return (
    <>
      <div className="mx-auto lg:text-center">
        <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Publicaciones Destacadas
        </p>
      </div>
      <FeaturedList featuredPosts={featuredPosts} sectionName="Peluqueria" />
      <FeaturedList featuredPosts={featuredPosts} sectionName="Paseadores" />
      <FeaturedList featuredPosts={featuredPosts} sectionName="Veterinarios" />
      <FeaturedList featuredPosts={featuredPosts} sectionName="Productos" />
    </>
  );
}
