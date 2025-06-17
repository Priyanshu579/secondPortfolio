import React from "react";
import logo from "/src/assets/Priyanshu_logo.png";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 px-12 py-4 flex justify-around items-center text-xs md:text-xl mb-2.5 font-mono">
      <a href="#hero">
      <img className="h-12 lg:h-[60px] w-12 lg:w-[60px]" src={logo}/></a>
      <div className="space-x-4 flex gap-4">
        <a href="#hero" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
