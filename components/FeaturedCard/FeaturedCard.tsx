import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FeaturedCard.css';

// @ts-ignore
const FeaturedCard = ({ post }) => {
  return (
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
  );
};

export default FeaturedCard;
