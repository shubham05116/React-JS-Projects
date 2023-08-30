import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

const Navbar = ({ isLogged, setLogged }) => {
  function logoutHandler() {
    setLogged(false);
    toast.success("logged out");
  }

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[860px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-white  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4">
        {!isLogged && (
          <Link to="/login">
            <button className="text-slate-200 bg-slate-800 shadow-md rounded-[12px] px-[12px] py-[8px] border-slate-800" >Log in</button>
          </Link>
        )}
        {!isLogged && (
          <Link to="/signup">
            <button className="text-slate-200 bg-slate-800 shadow-md rounded-[12px] px-[12px] py-[8px] border-slate-800" >Sign up</button>
          </Link>
        )}
        {isLogged && (
          <Link to="/dashboard">
            <button className="text-slate-200 bg-slate-800 shadow-md rounded-[12px] px-[12px] py-[8px] border-slate-800" >DashBoard</button>
          </Link>
        )}
        {isLogged && (
          <Link to="/">
            <button className="text-slate-200 bg-slate-800 shadow-md rounded-[12px] px-[12px] py-[8px] border-slate-800"  onClick={logoutHandler}>LogOut</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
