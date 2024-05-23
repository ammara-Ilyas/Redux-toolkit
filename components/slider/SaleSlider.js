"use client";
import React, { useRef, useState } from "react";
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
    <div className="border-2 w-[70%] mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {productList.map((item, i) => (
          <SwiperSlide>
            <div
              className="card w-full border-2   hover:shadow-xl p-4 transition"
              key={item.id}
            >
              <Link href={`/product/${item.id}`}>
                {" "}
                <img
                  src={item.image}
                  alt="pro"
                  className="w-3/4 mx-auto h-[250px]"
                />
              </Link>
              <div className="card-body">
                <h2 className="card-title  h-16 ">{item.title}</h2>
                <p className="p-2 flex justify-between ">
                  <b>{item.category}</b>
                  <button className="bg-blue-700 p-2 hover:bg-blue-500">
                    Price:{item.price}$
                  </button>
                </p>

                <button
                  onClick={() => handlerAddtoCart(item)}
                  className="bg-red-700 p-3 w-full hover:bg-red-500 active:bg-red-950 active:text-white"
                >
                  Add to cart
                </button>
              </div>
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SaleSlider;
