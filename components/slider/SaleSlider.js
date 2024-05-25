"use client";
import React, { useRef, useState } from "react";
import ProductCard from "../widgets/product/Card";
import { Swiper, SwiperSlide } from "swiper/react";
//////////import reducer cart
import { useSelector } from "react-redux";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SaleSlider = () => {
  const productList = useSelector((state) => state.cart.products);

  return (
    <div className="border-2 w-full ml-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {productList.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="card w-full border-2   hover:shadow-xl p-4 transition"
              key={item.id}
            >
              <ProductCard product={item} />
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SaleSlider;
