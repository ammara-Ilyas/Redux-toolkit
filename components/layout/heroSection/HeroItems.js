import React from "react";

const HeroItem = ({ backgroundImage }) => {
  return (
    <div
      className="hero__item set-bg h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero__text text-center text-white">
        <span className="block text-xl">FRUIT FRESH</span>
        <h2 className="text-4xl">
          Vegetable <br /> 100% Organic
        </h2>
        <p>Free Pickup and Delivery Available</p>
        <a
          href="#"
          className="primary-btn bg-blue-500 text-white py-2 px-4 mt-4 inline-block"
        >
          SHOP NOW
        </a>
      </div>
    </div>
  );
};

export default HeroItem;
