"use client";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "@/redux/slice/cartSlice";
const CategoryButton = () => {
  const productsList = useSelector((state) => state.cart.productList);
  const dispatch = useDispatch();
  // console.log("prodList", productsList);
  const category = [...new Set(productsList.map((item) => item.category))];
  console.log("cate", category);

  ///////////////filterProduct on category
  const handleCategories = (cate) => {
    const filterdedProducts = productsList.filter((item) => {
      return item.category.toUpperCase() == cate.toUpperCase();
    });
    console.log("filter", filterdedProducts);
    dispatch(setProducts(filterdedProducts));
  };
  return (
    <>
      {" "}
      <h3 className="text-2xl font-semibold w-3/4 my-3 mx-auto">Categories</h3>
      <div className="flex gap-5 flex-wrap w-[95%] mx-auto justify-center">
        {category.map((cate, i) => (
          <button
            className="border-2  rounded-md shadow-md capitalize py-1 text-xl w-[46%]"
            key={i}
            onClick={() => handleCategories(cate)}
          >
            {cate}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryButton;
