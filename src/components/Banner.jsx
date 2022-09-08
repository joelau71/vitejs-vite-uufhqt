import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Banner() {
  return (
    <Swiper
      spaceBetween={50}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src="https://source.unsplash.com/1920x940/?sky night&sig=1"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://source.unsplash.com/1920x940/?sky night&sig=2"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://source.unsplash.com/1920x940/?sky night&sig=3"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://source.unsplash.com/1920x940/?sky night&sig=4"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
