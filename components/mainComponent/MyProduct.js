"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../sharedData/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
function Product() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        console.log(data[0].img);
        setData(data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);
  const handlerAddtoCart = (proItem) => {
    dispatch(addToCart(proItem));
  };
  return (
    <div className="grid grid-cols-12  gap-4	border-red-200 justify-center mt-28 mx-auto place-content-center">
      {data &&
        data.map((item, i) => (
          <div
            className="card w-96 border-2 bg-base-100 shadow-xl col-span-4 p-4 transition"
            key={i}
          >
            <img src={item.image} alt="pro" className="w-full h-[250px]" />
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="p-2">
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
      <ToastContainer stacked />
    </div>
  );
}

export default Product;
