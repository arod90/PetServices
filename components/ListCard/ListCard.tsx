'use client';
import React from 'react';
import { FaLink, FaWhatsapp } from 'react-icons/fa';
import './ListCard.css';
import Link from 'next/link';
import ImageSlider from '../ImageSlider/ImageSlider';
import { FaLocationDot } from 'react-icons/fa6';

// @ts-ignore
const ListCard = ({ post }) => {
  console.log('POST', post);

  return (
    <div className="list-card bg-blue mb-4" key={post.post.id}>
      <div className="list-img-cont ">
        <ImageSlider images={post.imageUrls} />
      </div>
      <div className="list-content-cont bg-blue">
        <p className="font-medium hover:text-indigo-900 cursor-pointer underline w-fit">
          {post.post.categoryName}
        </p>
        {/* <Link href={`${post.post.categoryName.toLowerCase()}/${post.post.id}`}> */}
        <h3 className="text-2xl font-bold">{post.post.title}</h3>
        <div className="location-container mt-2">
          <FaLocationDot />
          <p className="ml-2 font-medium hover:text-indigo-900 cursor-pointer w-fit">
            {post.post.city && `${post.post.city}, ${post.post.hood}`}
          </p>
        </div>

        <p className="mt-2 text-base leading-6 text-gray-600 description">
          {post.post.description}
        </p>
        <Link className="underline pointer" href={`singlepost/${post.post.id}`}>
          ...leer mas
        </Link>
        <div className="phone-cont flex items-center">
          {/* <FaPhoneVolume /> */}
          <p>Contacto:</p>
          <p className="ml-1 mr-2 text-base leading-8 text-gray-800 description">
            {post.post.phone && `+${post.post.phone}`}
          </p>
          <a
            className="whats-icon"
            target="_blank"
            href={`https://wa.me/${post.post.phone}`}
          >
            <FaWhatsapp size={20} color="white" />
          </a>
        </div>
        <Link
          className="mt-2 underline pointer flex items-center w-fit"
          href={`singlepost/${post.post.id}`}
        >
          <FaLink className="mr-2" /> Ir a publicacion
        </Link>
      </div>
    </div>
  );
};

export default ListCard;
