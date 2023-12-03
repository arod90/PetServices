import Featured from '@/components/FeaturedSection/Featured';
import { prisma } from '@/utils/db';
import { use } from 'react';

const getAllPosts = async () => {
  const featuredPosts = await prisma.post.findMany({
    take: 4,
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
  // const imageUrls = featuredPosts.map((post) => {
  //   const imageUrls = post.imageUrl.map((image) => ({ url: image.url }));
  //   return imageUrls;
  // });
  // console.log('featuredPosts!!', featuredPosts);
  // console.log('imageUrls!!', imageUrls);

  return (
    <>
      <Featured featuredPosts={featuredPosts} />
    </>
  );
}
