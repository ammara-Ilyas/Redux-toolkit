import React from "react";
import { socialIcons } from "../Data";
import Link from "next/link";
////////////////
import Button from "@/components/widgets/Button";
const FooterNewsletter = () => (
  <div className="  h-full flex flex-col gap-5 w-full p-7">
    <h6 className=" font-bold">Join Our Newsletter Now</h6>
    <p className="text-sm text-gray-600">
      Get E-mail updates about our latest shop and special offers.
    </p>
    <form action="#" className="   ">
      <input
        type="text"
        placeholder="Enter your mail"
        className=" p-3 border-none outline-none "
      />

      <Button text="Subscribe" />
    </form>
    <ul className="flex items-center  gap-2 mt-5">
      {socialIcons.map((item, i) => (
        <li
          key={i}
          className="border-none bg-white p-3 rounded-full group hover:bg-green-500 duration-200"
        >
          <Link href={item.link}>
            <span className=" group-hover:rotate-180 group-hover:text-white duration-200">
              {item.icon}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterNewsletter;
