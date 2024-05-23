import React from "react";
import logo from "@/image/header/logo.webp"; // Adjust the import path accordingly
import Image from "next/image";
import Link from "next/link";
const FooterLogo = () => (
  <div className="">
    <div className="">
      <Link href="/">
        <Image src={logo} alt="Logo" />
      </Link>
    </div>
    <ul>
      <li>Address: 60-49 Road 11378 New York</li>
      <li>Phone: +65 11.188.888</li>
      <li>Email: hello@colorlib.com</li>
    </ul>
  </div>
);

export default FooterLogo;
