"use client";
import React, { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "@/redux/slice/cartSlice";

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.cart.productList);
  console.log("productList", productsList);
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };
  const applyFilter = () => {
    const filteredProducts = productsList.filter((item) => {
      return (
        item.price >= (minPrice || 0) && item.price <= (maxPrice || Infinity)
      );
    });
    console.log("filterd", filteredProducts);
    dispatch(setProducts(filteredProducts));
  };
  return (
    <div className=" flex justify-between items-center w-[95%] mx-auto ">
      <p className="text-2xl font-semibold">Price</p>
      <div className="flex justify-between  w-[80%] items-center">
        <div className="flex flex-col">
          Min{" "}
          <input
            type="number"
            className="border-[1px] h-8 w-20 shadow-sm p-2  "
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <FaArrowRightArrowLeft className=" mt-7 text-xl" />
        <div className="flex flex-col">
          Max
          <input
            type="number"
            className="border-[1px]  h-8 w-20 shadow-sm p-2  "
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <button
          className="border-[1px] bg-green-400 mt-7 p-2 font-semibold text-white rounded-md"
          onClick={applyFilter}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
