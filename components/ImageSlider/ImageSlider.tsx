import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
// import Swiper styles
import 'swiper/css';
import './ImageSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore

// @ts-ignore

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    // <Slider {...settings}>
    <Swiper className="swiper">
      {/* @ts-ignore */}
      {images.map((image, index) => (
        // <div key={index}>
        //   <Image
        //     src={image.url}
        //     width={100}
        //     height={100}
        //     alt={`Slide ${index}`}
        //   />
        // </div>
        <SwiperSlide key={index} className="swiper-slide">
          <Image
            src={image.url}
            // width={0}
            // height={0}
            layout="fill"
            objectFit="cover"
            // sizes="100%"
            // style={{ width: '100%', height: 'auto' }} // optional
            // alt={`Slide ${index}`}
            className="inner-image"
            alt={''}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    // </Slider>
  );
};

export default ImageSlider;
