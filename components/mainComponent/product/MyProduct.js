"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  setProducts,
  setFilteredProducts,
} from "@/redux/slice/cartSlice";
import ProductCard from "@/components/widgets/product/Card";
import ProductCardDetail from "@/components/widgets/product/ProductCardDetail";

function Product() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.cart.products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        const data = await res.json();
        dispatch(setProducts(data));
        dispatch(setFilteredProducts(data));
      } catch (error) {
        console.error("Fetching error: ", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const handleProduct = (product) => {
    console.log("Product clicked:", product);
    // Handle product click event, e.g., add to cart or show details
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full border-red-200 mt-28 mx-auto">
      {productList.length === 0 ? (
        <div className="text-center text-2xl">Loading...</div>
      ) : (
        productList.map((item) => (
          <div
            key={item.id}
            className="w-[30%]"
            onClick={() => handleProduct(item)}
          >
            <ProductCard product={item} />
            <ProductCardDetail product={item} />
          </div>
        ))
      )}
      <ToastContainer stacked />
    </div>
  );
}

export default Product;
