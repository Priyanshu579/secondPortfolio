import React from "react";
import { motion } from "motion/react";
import Navbar from "/src/components/Navbar.jsx";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <motion.div
      className="h-screen w-full bg-cover bg-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
        <h1 className="text-sm md:text-xl">| Frontend Developer | Content Creator |</h1>

        <h1 className="text-4xl md:text-7xl font-bold mb-8">
          Hi, I'm Priyanshu
        </h1>
        <h1>
        <Typewriter
          words={[
            "HTML, CSS, javaScript",
            "Reactjs",
            "TailwindCss",
            "Framer-motion",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={60}
          delaySpeed={500}
        /></h1>
      </div>
    </motion.div>
  );
};

export default Hero;
