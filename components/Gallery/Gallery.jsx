'use client';
import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <>
      <div className="page">
        <h1>Image Gallery</h1>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER_PATH}/api/images`);
  const images = await res.json();
  return {
    props: { images },
  };
};

export default Gallery;
