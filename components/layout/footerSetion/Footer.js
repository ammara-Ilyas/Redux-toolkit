import React from "react";
import FooterLogo from "./FooterLofo";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNew";
import FooterCopyright from "./FooterCopy";
import FooterWrapper from "./FooterWrapper";
const Footer = () => {
  return (
    <footer className="footer flex flex-col gap-3  border-2">
      <div className=" border-2 border-black w-full ">
        <div className="row flex justify-between mx-14">
          <div className=" w-[30%]  border-2 ">
            <FooterLogo />
          </div>
          <div className="w-[30%] border-2">
            <FooterLinks />
          </div>
          <div className="w-[30%]  border-2 ">
            <FooterNewsletter />
          </div>
        </div>
        <div className="border-2 border-red-600 w-full">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
