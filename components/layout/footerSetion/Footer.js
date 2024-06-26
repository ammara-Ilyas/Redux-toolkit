import React from "react";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNew";
import FooterCopyright from "./FooterCopy";
const Footer = () => {
  return (
    <footer className="footer flex flex-col gap-3 bg-[#F3F6FA;]">
      <div className="  w-full S">
        <div className="row flex justify-between mx-14  py-7">
          <div className=" w-[30%]   ">
            <FooterLogo />
          </div>
          <div className="w-[30%] ">
            <FooterLinks />
          </div>
          <div className="w-[35%]   ">
            <FooterNewsletter />
          </div>
        </div>
        <div className=" w-[95%] mx-auto py-3 border-t-[1px]">
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
