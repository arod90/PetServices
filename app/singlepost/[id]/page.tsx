import React from 'react';
import PostCard from '@/components/PostCard/PostCard';
import { prisma } from '@/utils/db';
import GoBack from '@/components/Buttons/GoBack';

// @ts-ignore
const getPost = async (id) => {
  const entry = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: { imageUrl: true },
  });
  // console.log(entry);
  return { entry, imageUrls: entry.imageUrl.flatMap((image) => image.url) };
};

// @ts-ignore
const page = async ({ params }) => {
  // console.log(params);

  const post = await getPost(params.id);
  return (
    <section className="single-post-section">
      <GoBack />
      <PostCard post={post} />
    </section>
  );
};

export default page;
