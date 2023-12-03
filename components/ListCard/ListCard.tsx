'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './ListCard.css';
import Link from 'next/link';
import ImageSlider from '../ImageSlider/ImageSlider';

// @ts-ignore
const ListCard = ({ post }) => {
  console.log('POST', post);

  return (
    <div className="list-card bg-blue mb-4" key={post.post.id}>
      <div className="img-cont ">
        <ImageSlider images={post.imageUrls} />
      </div>
      <div className="content-cont bg-blue">
        <p className="font-medium hover:text-indigo-900 cursor-pointer underline w-fit">
          {post.post.categoryName}
        </p>
        {/* <Link href={`${post.post.categoryName.toLowerCase()}/${post.post.id}`}> */}
        <Link href={`singlepost/${post.post.id}`}>Ver publicacion</Link>
        <h3 className="text-2xl font-bold">{post.post.title}</h3>
        <p className="font-medium hover:text-indigo-900 cursor-pointer w-fit">
          {post.post.city}
        </p>
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

export default ListCard;
