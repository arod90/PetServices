import Image from 'next/image';
import './ImageSlider.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

// @ts-ignore

// @ts-ignore

const ImageSlider = ({ images }) => {
  return (
    <Swiper className="swiper">
      {/* @ts-ignore */}
      {images.map((url, index) => (
        <SwiperSlide
          key={index}
          className="swiper-slide"
          style={{ position: 'relative' }}
        >
          <Image
            src={url}
            fill
            sizes="w-100 h-100"
            priority={true}
            style={{ objectFit: 'cover' }}
            className="inner-image"
            alt={''}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
