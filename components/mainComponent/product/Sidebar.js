import React from "react";
import Color from "@/components/widgets/product/Color";
import PriceFilter from "@/components/widgets/product/PriceFilter";
import CategoryButton from "@/components/widgets/product/CategoryButton";
import SidebarSlider from "@/components/slider/SidebarSlider";

function Sidebar() {
  return (
    <div className="w-11/12 h-auto sticky top-0 mt-16">
      <PriceFilter />
      <Color />
      <CategoryButton />
      <SidebarSlider />
    </div>
  );
}

export default Sidebar;
