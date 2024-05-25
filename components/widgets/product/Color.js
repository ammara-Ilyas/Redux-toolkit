import React from "react";

const Color = () => {
  const color = ["white", "blue", "red", "green", "yellow", "purple"];
  return (
    <div className=" flex flex-wrap mx-auto w-[70%] my-10">
      {color.map((item, i) => (
        <div className="flex items-center gap-2 text-xl w-[45%]" key={i}>
          <div
            className={`h-4 w-4 rounded-full bg-${item}-500 border-[1px]`}
          ></div>
          <p className="capitalize">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Color;
