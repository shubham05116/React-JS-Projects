import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div >
      {cart.length > 0 ? (
        <div className="flex flex-col gap-20 justify-around max-w-4xl p-2 mx-auto min-h-[80vh] " >
        <div className=" grid  gap-y-7  ">
            <div className=" ">
              <div className="text-center text-green-500 font-semibold text-2xl mt-16">Your Cart</div>
              <div className="text-center text-green-500 font-bold text-5xl mb-5">Summary</div>
              <p>
                <span className="text-gray-600 font-bold">Total items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p className="text-gray-500 font-bold  mb-5">Total Amount: <span className="text-black "> ${Math.floor(totalAmount)}</span> </p>
              <button className="bg-green-500 py-2 px-[60px] rounded-lg text-white font-bold">CheckOut Now</button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
         
        </div>
      ) : (
        <div className="flex gap-5 h-[80vh] flex-col justify-center items-center">
          <h1 className="text-2xl">Cart Empty</h1>
          <Link to="/">
            <button className="text-2xl bg-green-500 py-2 px-4 text-white font-semibold rounded-md" >Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
