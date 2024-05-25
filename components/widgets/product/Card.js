"use client";
import React from "react";
import { FaHeart, FaRetweet, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-3 rounded-full text-sm ">
          20%
        </div>
        <ul className=" bottom-2 border-2 bg-black text-white border-black w-full left-2 flex items-center justify-center text-xl space-x-2">
          <li>
            <Link
              href="#"
              className="bg-red-700 p-2 rounded-full hover:text-red-500"
              onClick={() => dispatch(addToCart(product))}
            >
              <FaHeart />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-white rounded-full hover:text-blue-500"
            >
              <FaRetweet />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-white rounded-full hover:text-green-500"
            >
              <FaShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <h5 className="text-lg font-bold text-gray-900 mt-1">
          <Link href="#" className="capitalize text-xl">
            {product.category}
          </Link>
        </h5>
        <div className="text-xl font-semibold text-red-500 mt-2">
          ${product.price - Math.floor((product.price / 100) * 20)} <br />
          <span className="text-gray-500 line-through">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
