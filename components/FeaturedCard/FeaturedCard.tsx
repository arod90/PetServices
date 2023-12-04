import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot, FaLink, FaPhoneVolume } from 'react-icons/fa6';
import './FeaturedCard.css';
import Link from 'next/link';
import ImageSlider from '../ImageSlider/ImageSlider';

const FeaturedCard = ({ post }) => {
  return (
    <div className="featured-card bg-blue" key={post.post.id}>
      <div className="featured-title-cont">
        <p className="hover:text-indigo-900 cursor-pointer underline w-fit">
          {post.post.categoryName}
        </p>
        <h3 className="font-bold">{post.post.title}</h3>
      </div>
      <div className="featured-img-cont">
        <ImageSlider images={post.imageUrls} />
        {/* <img src={post.post.imageUrl} alt="" /> */}
      </div>
      <div className="content-cont bg-blue">
        <p className="text-base leading-6 text-gray-600 description">
          {post.post.description}
        </p>
        <Link className="underline pointer" href={`singlepost/${post.post.id}`}>
          ...leer mas
        </Link>

        <div className="location-container mt-2">
          <FaLocationDot />
          <p className="ml-2 font-medium hover:text-indigo-900 cursor-pointer w-fit">
            {post.post.city && `${post.post.city}, ${post.post.hood}`}
          </p>
        </div>

        <div className="phone-cont flex items-center mt-2">
          {/* <FaPhoneVolume /> */}
          <a
            className="whats-icon"
            target="_blank"
            href={`https://wa.me/${post.post.phone}`}
          >
            <FaWhatsapp size={20} color="white" />
          </a>
          <p className="ml-3 text-base leading-8 text-gray-800 description">
            {post.post.phone && `+${post.post.phone}`}
          </p>
        </div>
        <Link
          className="underline pointer flex items-center mt-2 w-fit"
          href={`singlepost/${post.post.id}`}
        >
          <FaLink className="mr-2" /> Ir a publicacion
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
