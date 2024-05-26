import React from "react";
const IconLinks = ({ icon, tailwindClasses }) => {
  return (
    <div
      className={` ${tailwindClasses}  duration-500  origin-center p-3 rounded-full hover:bg-green-600 hover:text-white bg-white`}
    >
      {icon}
    </div>
  );
};

export default IconLinks;
