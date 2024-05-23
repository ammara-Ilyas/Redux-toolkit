"use client";
import React from "react";
import Button from "@/components/widgets/Button";
//////////icon
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const HeroSearch = () => {
  return (
    <div className=" flex justify-between items-center ">
      <div className=" flex items-center w-[70%] border-[1px] ">
        <form action="#" className="flex  border-blue-500 w-full ">
          <div className=" relative  flex items-center justify-center gap-2  w-[25%] p-[6px]">
            All Categories
            <FaAngleDown className="text-gray-500" />
          </div>
          <div className="border-[1px] border-r-gray-400  "></div>
          <input
            type="text"
            placeholder="What do you need?"
            className="p-3 border-none outline-none w-[70%] border-gray-300 "
          />

          <Button text="Search" tailwindClasees="p-3 w-[20%]  " />
        </form>
      </div>
      <div className="hero__search__phone flex items-center">
        <div className="p-4 bg-gray-200 rounded-full group hover:bg-green-500 duration-200">
          <FaPhoneAlt className="text-sm text-green-500 group-hover:text-white duration-200" />
        </div>
        <div className=" ml-4">
          <h5 className="font-bold">+65 11.188.888</h5>
          <span>support 24/7 time</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
