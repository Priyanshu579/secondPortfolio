import React from "react";
import logo from "/src/assets/Priyanshu_logo.png";
import {motion} from 'motion/react'
import { CiLight } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className="sticky top-5 z-50 px-12 py-4 flex justify-around items-center text-xs md:text-xl mb-2.5 font-mono">
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
      <motion.span
      whileHover={{scale:1.5}}
      whileTap={{scale:0.9}}
      className="text-white cursor-pointer">
      <CiLight size={23} />
      </motion.span>
    </nav>
  );
};

export default Navbar;
