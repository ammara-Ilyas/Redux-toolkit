"use client";
import React from "react";
import { FaHeart, FaRetweet, FaShoppingCart } from "react-icons/fa";
import IconLinks from "./widgets/Icon";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleCartAddItem = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl h-64 ">
      <div
        className="group duration-700 relative bg-cover object-fill overflow-hidden flex flex-col items-end justify-end bg-center h-64"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <ul className="group-hover:bottom-0 absolute left-0 -bottom-[25%] duration-700  items-center w-full h-1/4 flex  justify-center  gap-5 text-xl">
          <li
            className=" h-full flex items-center justify-center  "
            onClick={() => handleCartAddItem(product)}
          >
            <IconLinks icon={<FaHeart />} tailwindClasses=" " />
          </li>
          <li className=" h-full flex items-center justify-center  ">
            <IconLinks icon={<FaRetweet />} tailwindClasses="" />
          </li>
          <li className=" h-full flex items-center justify-center  ">
            <IconLinks icon={<FaShoppingCart />} tailwindClasses="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
