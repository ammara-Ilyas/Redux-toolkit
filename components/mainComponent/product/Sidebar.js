import React from "react";
import Color from "@/components/widgets/product/Color";
import PriceFilter from "@/components/widgets/product/PriceFilter";
function Sidebar() {
  return (
    <div className="w-11/12 sticky">
      <PriceFilter />
      <Color />
    </div>
  );
}

export default Sidebar;
