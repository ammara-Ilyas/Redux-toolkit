"use client";
import React, { useState, useContext } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useSelector } from "react-redux";
function Cart() {
  const cartItems = Array.from(useSelector((state) => state.items.cart));
  console.log(cartItems);

  return (
    <div className=" w-3/4 mx-auto mt-8 bg-base-100 shadow-xl  p-4 transition flex overflow-hidden ">
      {cartItems.length === 0 ? (
        <p className="text-gray-600 flex justify-center items-center">
          <b>Your cart is empty.</b>
        </p>
      ) : (
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">Your Cart</h1>

          <div className="border-2 overflow-y-scroll h-80">
            {cartItems.map((product, index) => (
              <div
                key={index}
                className="flex items-center   justify-between border-b border-gray-300 py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p className="text-gray-600">Price: ${product.price}</p>
                  </div>
                </div>
                <div className="flex basis-1/4 justify-between pr-4">
                  <div className="flex items-center  gap-2 font-bold text-xl">
                    <CiSquarePlus
                    // onClick={() => handleProductItemInc(index)}
                    />
                    {product.quantity}
                    <CiSquareMinus
                    // onClick={() => handleProductItemDec(index)}
                    />
                  </div>
                  <button
                    className="text-red-600 font-semibold"
                    // onClick={() => deleteItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end flex-col">
            <p className="text-center font-bold text-2xl mb-3">
              Total Price :{/* {Math.round(totalPrice)}$ */}
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
