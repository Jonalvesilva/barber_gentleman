"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { unidades } from "../constants/unidades";
import { breakpoints } from "../constants/breakpointsSwiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        grabCursor={true}
        pagination={false}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={breakpoints}
        className="mySwiper"
      >
        {unidades.map((data) => {
          return (
            <SwiperSlide className="relative">
              <img
                src={data.urlPhoto}
                alt={data.name}
                className="w-full h-full"
                key={data.name}
              />
              <span className="text-white absolute top-0 left-0 p-2 bg-orange-500 rounded-r-sm">
                {data.name}
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
