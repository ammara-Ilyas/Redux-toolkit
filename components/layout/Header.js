"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import logo from "../../image/logo.jpg";
import Icon from "../../image/cart.jpg";
import Link from "next/link";
function Header() {
  return (
    <>
      <nav className="border-4 flex justify-between px-16 py-3 duration-75 sticky top-0 z-40 bg-slate-50">
        <div className="col-span-2">
          <Link href="/product">
            <Image src={logo} alt="logo" className="h-10 w-10" />
          </Link>
        </div>
        <div
          className="col-span-5 text-end border-blue-950 border-2 px-3 relative flex justify-center"
          // onClick={handlerCartPage}
        >
          <span className="bg-red-600 rounded-full absolute px-2 hover:bg-red-800 hover:text-white cursor-pointer">
            {/* {cartNo} */}1
          </span>
          <Link href="/cart">
            <Image src={Icon} alt="cart-icon" className="h-10 w-10" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
