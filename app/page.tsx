import Featured from '@/components/FeaturedSection/Featured';
import { prisma } from '@/utils/db';

const getAllPosts = async () => {
  const featuredPosts = await prisma.post.findMany({
    take: 4,
    orderBy: {
      createdAt: 'desc',
    },
    include: { imageUrl: true },
  });
  const imageUrls = featuredPosts.flatMap((post) =>
    post.imageUrl.map((image) => ({ url: image.url }))
  );
  return { featuredPosts, imageUrls };
};

export default async function Home() {
  const { featuredPosts, imageUrls } = await getAllPosts();
  console.log(imageUrls);
  // @ts-ignore
  // console.log('imageUrls', imageUrls);
  // console.log('featuredPosts', featuredPosts);

  return <Featured featuredPosts={featuredPosts} imageUrls={imageUrls} />;
}
