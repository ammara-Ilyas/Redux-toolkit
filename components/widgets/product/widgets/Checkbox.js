"use client";
import React, { useState } from "react";
const Checkbox = ({ bgcolor }) => {
  const [color, setColor] = useState("red");
  return (
    <span className="border-[1px] rounded-full w-[14px] h-[14px] flex items-center justify-center">
      <input
        type="checkbox"
        className={`appearance-none w-full h-full border-none rounded-full checked:bg-${bgcolor}-500 checked:border-transparent`}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </span>
  );
};

export default Checkbox;
