import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
const HeroCategories = () => {
  const CategoriesList = [
    {
      name: "Men's Clothing",
      link: "/",
    },
    {
      name: "Women's Clothing",
      link: "/",
    },
    {
      name: "Kid's Clothing",
      link: "/",
    },
    {
      name: "Formal Wear",
      link: "/",
    },
    {
      name: "Casual Wear",
      link: "/",
    },
    {
      name: "Sportswear",
      link: "/",
    },
    {
      name: "Outerwear",
      link: "/",
    },
    {
      name: "Activewear",
      link: "/",
    },
    {
      name: "Denim & Jeans",
      link: "/",
    },
  ];
  return (
    <div className="">
      <div className=" flex border-2 w-[60%] bg-rose-400 p-2 items-center">
        <div className="">
          <FaBars />
        </div>{" "}
        <span>All departments</span>
      </div>
      <ul className="mt-2">
        {CategoriesList.map((item, i) => (
          <li key={i}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroCategories;
