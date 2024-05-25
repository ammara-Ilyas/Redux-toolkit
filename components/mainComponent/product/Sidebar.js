import React from "react";
import RangeSlider from "@/components/slider/RangeSlider";
import Color from "@/components/widgets/product/Color";
function Sidebar() {
  return (
    <div className="w-11/12">
      <RangeSlider />
      <Color />
    </div>
  );
}

export default Sidebar;
