import React from "react";
import logo from "./logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const {cart} = useSelector((state)=>state)

  return (
    <div className=" ">
      <nav className="flex justify-between items-center h-20 max-w-4xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src={logo} alt="" className="h-14" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-white mr-5 space-x-6 ">
          <NavLink to="/">
            <p className="">Home</p>
          </NavLink>
          <NavLink to="/cart">
          <div className="relative">
            <AiOutlineShoppingCart className="text-white  text-3xl" />
            <span className="absolute -top-1 -right-2 bg-green-400 w-5 h-5 animate-bounce flex justify-center items-center  rounded-full text-xs">{cart.length}</span>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
