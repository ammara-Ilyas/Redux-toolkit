"use client";
import React from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import {
  removefromCart,
  increCartItems,
  decreCartItems,
} from "@/redux/slice/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cart", cartItems);

  const totalPriceAllProducts = cartItems.reduce((acc, priceItem) => {
    return acc + priceItem.totalPrice;
  }, 0);
  console.log("item", totalPriceAllProducts);
  const deleteItem = (index) => {
    dispatch(removefromCart(index));
  };
  const handleProductItemInc = (index) => {
    console.log(index);
    dispatch(increCartItems(index));
  };
  const handleProductItemDec = (index) => {
    dispatch(decreCartItems(index));
  };
  return (
    <div className=" w-3/4 mx-auto mt-8 bg-base-100 shadow-xl  p-4 transition flex overflow-hidden ">
      {cartItems.length === 0 ? (
        <div className="text-gray-600 min-h-24 flex text-center text-2xl pt-11 font-bold justify-center items-center">
          <h2>Your cart is empty.</h2>
        </div>
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
                    <CiSquarePlus onClick={() => handleProductItemInc(index)} />
                    {product.quantity}
                    <CiSquareMinus
                      onClick={() => handleProductItemDec(index)}
                    />
                  </div>
                  <button
                    className="text-red-600 font-semibold"
                    onClick={() => deleteItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end flex-col">
            <p className="text-center font-bold text-2xl mb-3">
              Total Price : ${Math.round(totalPriceAllProducts)}
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
