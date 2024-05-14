"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
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
    <div className="flex flex-wrap items-center justify-center gap-4 w-[90%]	border-red-200  mt-28 mx-auto">
      {data &&
        data.map((item, i) => (
          <div
            className="card w-[75%] sm:w-[45%] md:w-[30%] lg:w-[25%]   hover:shadow-xl p-4 transition"
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
              {/* <div className=" flex justify-between mx-10 my-5">
                <button className="bg-blue-700 p-2 hover:bg-blue-500">
                  Price:{item.price}$
                </button>
                <button className="bg-blue-700 p-3 hover:bg-blue-500">
                  Rating:{item.rating.rate}
                </button>
              </div> */}
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
