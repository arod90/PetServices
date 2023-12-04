'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import './PostSlider.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function PostSlider({ posts }) {
  console.log('POSTS!!!!', posts);
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={80}
        breakpoints={{
          // when window width is >= 320px
          1: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        // grabCursor={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation]}
        className="post-swiper"
      >
        {posts.map((post: any) => (
          <SwiperSlide key={post.post.id}>
            <FeaturedCard post={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
