import { prisma } from '@/utils/db';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import './Featured.css';
import { FaWhatsapp } from 'react-icons/fa';

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
];

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
      <div className="mx-auto  px-2 lg:px-4">
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
              <div className="featured-card bg-blue" key={post.id}>
                <div className="img-cont ">
                  <img src={post.imageUrl} alt="" />
                </div>
                <div className="content-cont bg-blue">
                  <p className="font-medium hover:text-indigo-900 cursor-pointer underline w-fit">
                    {post.categoryName}
                  </p>
                  <h3 className="text-2xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-lg leading-8 text-gray-600 description">
                    {post.description}
                  </p>
                  <p className="font-medium hover:text-indigo-900 cursor-pointer w-fit">
                    {post.city && `${post.city}, ${post.hood}`}
                  </p>
                  <div className="phone-cont flex mt-2">
                    <a target="_blank" href={`https://wa.me/${post.phone}`}>
                      <FaWhatsapp size={40} color="#25D366" />
                    </a>
                    <p
                      className="ml-3
                    
                    mt-2 text-lg leading-8 text-gray-600 description"
                    >
                      {post.phone && `+${post.phone}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
