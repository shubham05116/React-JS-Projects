import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added To Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed From Cart");
  };

  const info = `${(post.description).substring(0,60)}....`

  return (
    <div className=" flex flex-col items-center justify-between hover:scale-110 translate duration-300 ease-in gap-3 p-4 ml-5 mt-10 rounded-lg shadow-2xl hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] ">
      <div>
        <p className="font-semibold text-gray-800 text-lg text-left  truncate w-40 ">{(post.title).substring(0,30)}</p>
      </div>
      <div>
        <p className="text-xs text-gray-400 w-40 font-normal text-left "> {info}</p>
      </div>
      <div>
        <img src={post.image}  width={100} height={100} />
      </div>
      <div className="flex gap-5 items-center ">
        <p className=" text-green-500 font-bold rounded-md px-3 py-2">${post.price}</p>
     
       { cart.some((p) =>( p.id === post.id)) ? (
        <button className="text-[10px] text-gray-700 border-2 border-gray-700 rounded-full font-semibold  px-3 py-2 uppercase hover:bg-gray-700 hover:text-white transition duration-300  ease-in" onClick={removeFromCart}>Remove Item</button>) : (
        <button className="text-[10px] text-gray-700 border-2 border-gray-700 rounded-full font-semibold  px-3 py-2 uppercase hover:bg-gray-700 hover:text-white transition duration-300  ease-in" onClick={addToCart}>Add To Cart</button>)}
      </div>
    </div>
  );
};

export default Product;
