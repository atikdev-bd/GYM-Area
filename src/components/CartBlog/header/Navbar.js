import React from "react";
import titleImg from "../../../photo/titleImg-removebg-preview.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="header-nav">
        <div className="flex items-center mr-8 lg:mr-0 md:mr-0">
          <img
            className="w-16 md:w-20 lg:w-20 "
            src={titleImg}
            alt="titleImg"
          />
          <h1 className="text-md md:text-4xl lg:text-4xl font-extrabold text-slate-400 hover:text-emerald-400">
            GYM AREA
          </h1>
        </div>
        <div className="">
          <a href="/blog">Blogs</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
