"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SaleSlider = () => {
  return (
    <div className="border-2 w-[70%] mx-auto">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        spaceBetween={70}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border-2 bg-yellow-300">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 bg-yellow-300">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 bg-yellow-300">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 bg-yellow-300">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 bg-yellow-300">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 bg-yellow-300">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 bg-yellow-300">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 bg-yellow-300">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 bg-yellow-300">1</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SaleSlider;
