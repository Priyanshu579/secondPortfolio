import React from "react";
import { motion } from "framer-motion";
import priyanshuProfile from "/src/assets/priyanshuProfile.webp";
const Hero = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-around text-center gap-4 p-11 flex-wrap-reverse"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Hi, I'm Priyanshu
        </h1>
        <p className="text-lg mt-2 text-secondary">
          Frontend Developer | React | Tailwind | Framer-motion
        </p>
        <motion.div
        whileTap={{scale:0.9}}
        whileHover={{scale: 1.05}}
        className="bg-gray-400 rounded-full w-40 h-10 flex justify-center items-center m-5">
        <a href="/resume.pdf" className="text-black cursor-pointer p-2" download>Download Resume</a>
        </motion.div>
      </div>
      <div>
        <img
          src={priyanshuProfile}
          alt="priyanshuProfile"
          className="w-sm rounded-full lg:w-md"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
