import React from "react";
import "./Navbar.css";



const Navbar = () => {
  return (
    <div>
      <nav className="header-nav">
        <img src=""alt="" />
        
        <h1 className='text-4xl font-extrabold text-slate-400 hover:text-emerald-400'>GYM-AREA</h1>
        <div>
          <a href="/blog">Blogs</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
