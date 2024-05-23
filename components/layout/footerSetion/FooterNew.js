import React from "react";
import { socialIcons } from "../Data";
import Link from "next/link";
const FooterNewsletter = () => (
  <div className="footer__widget">
    <h6>Join Our Newsletter Now</h6>
    <p>Get E-mail updates about our latest shop and special offers.</p>
    <form action="#">
      <input type="text" placeholder="Enter your mail" />
      <button type="submit" className="site-btn">
        Subscribe
      </button>
    </form>
    <ul className="flex items-center justify-center gap-2">
      {socialIcons.map((item, i) => (
        <li key={i} className="border-none bg-red-500 p-2 rounded-full group ">
          <Link href={item.link}>
            <span className="group-hover:translate-x-2/3 group-hover:text-green-800">
              {item.icon}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterNewsletter;
