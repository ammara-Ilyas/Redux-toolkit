"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/////////////import cart reducer//////
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  setProducts,
  setFilteredProducts,
} from "@/redux/slice/cartSlice";
import ProductCard from "@/components/widgets/product/Card";
import ProductCardDetail from "@/components/widgets/product/ProductCardDetail";
function Product() {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.cart.products);
  // console.log("pro", productList);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        dispatch(setProducts(data));
        dispatch(setFilteredProducts(data));
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const handleProduct = (e) => {
    console.log(e.target);
  };
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full	border-red-200  mt-28 mx-auto">
      {!productList ? (
        <div className="text-center text-2xl">Loading...</div>
      ) : (
        productList.map((item, i) => (
          <div key={item.id} className="w-[30%]" onClick={handleProduct}>
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
