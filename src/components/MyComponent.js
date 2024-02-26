import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import wydruki_3d_zdjęcie1 from "../../public/images/profile/wydruki_3d_zdjęcie1.jpg";
import wydruki_3d_zdjęcie2 from "../../public/images/profile/wydruki_3d_zdjęcie2.jpg";
import wydruki_3d_zdjęcie3 from "../../public/images/profile/wydruki_3d_zdjęcie3.jpg";
import wydruki_3d_zdjęcie4 from "../../public/images/profile/wydruki_3d_zdjęcie4.jpg";
import wydruki_3d_zdjęcie5 from "../../public/images/profile/wydruki_3d_zdjęcie5.jpg";
import wydruki_3d_zdjęcie6 from "../../public/images/profile/wydruki_3d_zdjęcie6.jpg";
import wydruki_3d_zdjęcie7 from "../../public/images/profile/wydruki_3d_zdjęcie7.jpg";
import wydruki_3d_zdjęcie8 from "../../public/images/profile/wydruki_3d_zdjęcie8.jpg";
import wydruki_3d_zdjęcie9 from "../../public/images/profile/wydruki_3d_zdjęcie9.jpg";
import wydruki_3d_zdjęcie10 from "../../public/images/profile/wydruki_3d_zdjęcie10.jpg";
import wydruki_3d_zdjęcie11 from "../../public/images/profile/wydruki_3d_zdjęcie11.jpg";
import wydruki_3d_zdjęcie12 from "../../public/images/profile/wydruki_3d_zdjęcie12.jpg";
import wydruki_3d_zdjęcie13 from "../../public/images/profile/wydruki_3d_zdjęcie13.jpg";
import wydruki_3d_zdjęcie14 from "../../public/images/profile/wydruki_3d_zdjęcie14.jpg";

import Image from "next/image";

const MyComponent = () => {
  return (
    <section className="flex items-center justify-center px-5 pb-32">
      <div className="container">
        <Swiper
          loop={true}
          effect={"coverflow"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          spaceBetween={20}
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination, Scrollbar]}
          className="w-full text-white rounded-lg h-96 "
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie2}
              alt="Slide 2"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie3}
              alt="Slide 4"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie4}
              alt="Slide 5"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie5}
              alt="Slide 6"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie6}
              alt="Slide 7"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie7}
              alt="Slide 8"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie8}
              alt="Slide 9"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie9}
              alt="Slide 10"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie10}
              alt="Slide 11"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie11}
              alt="Slide 12"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie12}
              alt="Slide 13"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie13}
              alt="Slide 14"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie14}
              alt="Slide 14"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={wydruki_3d_zdjęcie1}
              alt="Slide 1"
              className="object-cover w-full h-full transition hover:scale-105"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MyComponent;
