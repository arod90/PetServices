import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FeaturedCard.css';
import Link from 'next/link';
import ImageSlider from '../ImageSlider/ImageSlider';

// @ts-ignore
const FeaturedCard = ({ post }) => {
  // console.log('POST', post);

  // console.log('imageUrls', imageUrls);

  return (
    <div className="featured-card bg-blue" key={post.post.id}>
      <div className="img-cont">
        <ImageSlider images={post.imageUrls} />
        {/* <img src={post.post.imageUrl} alt="" /> */}
      </div>
      <div className="content-cont bg-blue">
        <p className="font-medium hover:text-indigo-900 cursor-pointer underline w-fit">
          {post.post.categoryName}
        </p>
        <h3 className="text-2xl font-bold">{post.post.title}</h3>
        <Link href={`singlepost/${post.post.id}`}>Ver publicacion</Link>
        <p className="mt-2 text-lg leading-8 text-gray-600 description">
          {post.post.description}
        </p>
        <p className="font-medium hover:text-indigo-900 cursor-pointer w-fit">
          {post.post.city && `${post.post.city}, ${post.post.hood}`}
        </p>
        <div className="phone-cont flex mt-2">
          <a target="_blank" href={`https://wa.me/${post.post.phone}`}>
            <FaWhatsapp size={40} color="#25D366" />
          </a>
          <p className="ml-3 mt-2 text-lg leading-8 text-gray-600 description">
            {post.post.phone && `+${post.post.phone}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
