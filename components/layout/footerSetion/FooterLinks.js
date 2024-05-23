import React from "react";
import { footerLink, footerInfo } from "../Data";

import Link from "next/link";
const FooterLinks = () => (
  <div className="footer__widget flex  justify-between border-2">
    <div>
      {" "}
      <h6 className="font-bold text-xl">Useful Links</h6>
      <ul>
        {footerLink.map((item, i) => (
          <li key={i}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    <ul>
      {footerInfo.map((item, i) => (
        <li key={i}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinks;
