'use client';
import Image from 'next/image';
import React from 'react';

const Gallery = (props) => {
  return (
    <>
      <div className="page">
        <h1>Image Gallery</h1>
        <main>
          {/* @ts-ignore */}
          {props.images?.map((image) => (
            <Image
              src={`https://res.cloudinary.com/${process.env.CLOUD_NAME}/v${image.version}/${image.publicId}.${image.format}`}
              key={image.publicId}
            />
          ))}
        </main>
      </div>
      <style jsx>{`
        .image {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .image:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .image + .image {
          margin-top: 2rem;
        }
      `}</style>
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
