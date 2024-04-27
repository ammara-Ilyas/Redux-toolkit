"use client";
import React from "react";
import Image from "next/image";
import data from "../sharedData/data";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
function Product() {
  const dispatch = useDispatch();
  const handlerAddtoCart = (proItem) => {
    console.log(proItem);
    dispatch(addToCart(proItem));
    console.log("ok");
  };
  return (
    <div className="grid grid-cols-12 gap-4	border-red-200 justify-center max-w-7xl mx-auto place-content-center">
      {data &&
        data.map((item, i) => (
          <div
            className="card w-96 bg-base-100 shadow-xl col-span-4 p-4 transition"
            key={i}
          >
            <figure>
              <Image src={item.image} alt="pro" width={400} height={250} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="p-5">
                <b>{item.category}</b>
              </p>
              <div className=" flex justify-between mx-10 my-5">
                <button className="bg-blue-700 p-2 hover:bg-blue-500">
                  Price:{item.price}$
                </button>
                <button className="bg-blue-700 p-3 hover:bg-blue-500">
                  Rating:{item.rating.rate}
                </button>
              </div>
              <button
                onClick={() => handlerAddtoCart(item)}
                className="bg-red-700 p-3 w-full hover:bg-red-500 active:bg-red-950 active:text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Product;
