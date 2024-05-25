"use client";
import React, { useState, useEffect } from "react";

const RangeSlider = () => {
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(7000);
  const min = 100;
  const max = 10000;
  const [minThumb, setMinThumb] = useState(0);
  const [maxThumb, setMaxThumb] = useState(0);

  const minTrigger = (value) => {
    const minValue = Math.min(value, maxPrice - 500);
    setMinPrice(minValue);
    setMinThumb(((minValue - min) / (max - min)) * 100);
  };

  const maxTrigger = (value) => {
    const maxValue = Math.max(value, minPrice + 500);
    setMaxPrice(maxValue);
    setMaxThumb(100 - ((maxValue - min) / (max - min)) * 100);
  };

  useEffect(() => {
    minTrigger(minPrice);
    maxTrigger(maxPrice);
  }, []);

  return (
    <div className=" h-[200px] w-[90%] mx-auto flex justify-center items-center border-2">
      <div className="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            step="100"
            min={min}
            max={max}
            value={minPrice}
            onChange={(e) => minTrigger(Number(e.target.value))}
            className="absolute border-2 border-black z-20 h-2 w-full  cursor-pointer"
          />

          <input
            type="range"
            step="100"
            min={min}
            max={max}
            value={maxPrice}
            onChange={(e) => maxTrigger(Number(e.target.value))}
            className="absolute border-2 border-red-600  z-20 h-2 w-full  cursor-pointer"
          />

          <div className="relative z-10 h-2 border-2 border-blue-600">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
              style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}
            ></div>
            <div
              className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2 -ml-1"
              style={{ left: `${minThumb}%` }}
            ></div>
            <div
              className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2 -mr-3"
              style={{ right: `${maxThumb}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-center py-5">
          <div>
            <input
              type="text"
              maxLength="5"
              value={minPrice}
              onChange={(e) => minTrigger(Number(e.target.value))}
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
          <div>
            <input
              type="text"
              maxLength="5"
              value={maxPrice}
              onChange={(e) => maxTrigger(Number(e.target.value))}
              className="px-3 py-2  border-gray-200 border-2 rounded w-24 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
