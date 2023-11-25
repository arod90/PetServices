import { prisma } from '@/utils/db';
import './Featured.css';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const getAllPosts = async () => {
  // const itemsNumber = await prisma.post.count();
  const featuredPosts = prisma.post.findMany({
    take: 4, // Define the number of items you want
    orderBy: {
      createdAt: 'desc',
    },
    // skip: Math.floor(Math.random() * (itemsNumber - 4)),
  });
  return featuredPosts;
};

export default async function Featured() {
  const allPosts = await getAllPosts();

  // TODO Implement featured section
  return (
    <div className="bg-background text-textBlack featured-section px-4 sm:px-10 py-14 sm:py-12">
      <div className="mx-auto px-2 lg:px-4">
        <div className="mx-auto lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Publicaciones Destacadas
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16  sm:mt-20 lg:mt-10">
          <dl className="grid grid-cols-1 gap-x-14 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
            {allPosts.map((post) => (
              <FeaturedCard key={post.id} post={post} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
