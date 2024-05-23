import React from "react";

const HeroSearch = () => {
  return (
    <div className="hero__search flex justify-between items-center">
      <div className="hero__search__form flex items-center">
        <form action="#" className="flex">
          <div className="hero__search__categories relative">
            All Categories
            <span className="arrow_carrot-down absolute right-0"></span>
          </div>
          <input
            type="text"
            placeholder="What do you need?"
            className="p-2 border border-gray-300"
          />
          <button type="submit" className="site-btn bg-blue-500 text-white p-2">
            SEARCH
          </button>
        </form>
      </div>
      <div className="hero__search__phone flex items-center">
        <div className="hero__search__phone__icon">
          <i className="fa fa-phone"></i>
        </div>
        <div className="hero__search__phone__text ml-2">
          <h5>+65 11.188.888</h5>
          <span>support 24/7 time</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
