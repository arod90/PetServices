'use client';
import Image from 'next/image';
import './ImageSlider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

const ImageSlider = ({ images }) => {
  return (
    <>
      <Swiper
        className="swiper"
        pagination={true}
        // navigation={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
      >
        {images.map((url: string | StaticImport, index: Key) => (
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
              style={{ objectFit: 'contain' }}
              className="inner-image"
              alt={''}
            />
          </SwiperSlide>
        ))}
        <IoIosArrowDropleftCircle
          className="swiper-button-prev"
          color={'white'}
        />
        <IoIosArrowDroprightCircle
          className="swiper-button-next"
          color={'white'}
          border={'black'}
        />
      </Swiper>
    </>
  );
};

export default ImageSlider;
