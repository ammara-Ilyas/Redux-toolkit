"use client";
import { addToCart } from "@/redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default async function Page({ params }) {
  const dispatch = useDispatch();
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const product = data.find((item) => item.id === parseInt(params.id));
  const handlerAddtoCart = (proItem) => {
    console.log(proItem);
    dispatch(addToCart(proItem));
  };
  return (
    <div>
      {!product ? (
        <div className="card w-[90%] flex items-center justify-center p-10 hover:shadow-xl">
          Loading...
        </div>
      ) : (
        <div className="card mx-auto  w-[90%] flex gap-5  justify-center  hover:shadow-xl p-4 ">
          <img src={product.image} alt="pro" className="w-[35%] h-[450px]   " />
          <div className="card-body w-[40%]  flex flex-col gap-5 p-5">
            <h2 className="card-title text-3xl font-bold">{product.title}</h2>
            <p className="p-2 flex text-2xl justify-between ">
              {product.category}
            </p>
            <p className=" flex justify-between font-normal ">
              {product.description}
            </p>
            <div className=" flex gap-16 justify-center  mx-10 my-5">
              <button className="bg-blue-700 p-3 px-5 hover:bg-blue-500">
                Price:{product.price}$
              </button>
              <button className="bg-blue-700 p-3 px-5 hover:bg-blue-500">
                Rating:{product.rating.rate}
              </button>
            </div>
            <button
              onClick={() => handlerAddtoCart(product)}
              className="bg-red-700 p-3 mx-auto w-[40%] hover:bg-red-500 active:bg-red-950 active:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
      <ToastContainer stacked />
    </div>
  );
}
