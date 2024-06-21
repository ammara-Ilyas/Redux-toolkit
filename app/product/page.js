import React from "react";
import MyProduct from "@/components/mainComponent/product/MyProduct";
import SaleSlider from "@/components/slider/SaleSlider";
import Sidebar from "@/components/mainComponent/product/Sidebar";
function page() {
  return (
    <div className="flex border-2">
      <div className="w-[25%] border-2 relative h-auto">
        <Sidebar />
      </div>
      <div className="w-[70%] border-2 mr-7">
        <SaleSlider />
        <MyProduct />
      </div>
    </div>
  );
}

export default page;
