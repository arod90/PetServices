'use client';
import './Featured.css';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

// @ts-ignore
export default function Featured({ featuredPosts, imageUrls }) {
  // TODO Implement featured section
  return (
    <div className="bg-background text-textBlack featured-section px-4 sm:px-10 py-8 sm:py-4">
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
        <div className="mx-auto mt-10  sm:mt-10 lg:mt-10">
          <dl className="grid grid-cols-1 gap-x-14 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
            {/* @ts-ignore */}
            {featuredPosts.map((post) => (
              <FeaturedCard key={post.id} post={post} imageUrls={imageUrls} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
