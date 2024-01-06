import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div>
      <div className="flex gap-10 my-10 ">
        <div>
          <img src={item.image} alt="" width={150} height={150} />
        </div>
        <div className="flex flex-col gap-5 w-[300px]">
          <h1 className="text-xl font-bold">{item.title}</h1>
          <h1 className="text-gray-400 ">
            {item.description.substring(0, 110)}...
          </h1>
          <div className="flex justify-between items-center text-xl mb-10  ">
            <p className="text-green-500 font-bold ">${item.price}</p>
            <div
              className="text-red-500 bg-red-300 py-2 px-2 rounded-2xl cursor-pointer"
              onClick={removeFromCart}
            >
              <AiOutlineDelete />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
