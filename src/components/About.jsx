import React from "react";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-6 md:px-20 text-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-primary mb-9">About Me</h2>
      <br />
      <p className="text-lg leading-relaxed max-w-3xl text-gray-300">
        I'm <span className="text-blue-400">Priyanshu Dhiman</span> — a
        self-taught Frontend Developer who didn’t just choose coding as a
        career, but as a passion.
        <br />
        <br />
        I started with pure curiosity, exploring HTML, CSS, and JavaScript, and
        slowly fell in love with building things from scratch. Every time I felt
        like quitting, I came back stronger — and that's what defines me.
        <br />
        <br />
        <span className="text-blue-400">Today</span>, I work with technologies
        like React.js, Tailwind CSS, and Framer Motion to build modern,
        responsive, and animated interfaces that feel alive. I don’t just aim to
        make things functional — I strive to make them beautiful and meaningful.
        <br />
        <br />
        My ultimate goal is to become the kind of developer who builds real
        value for real people — with clean code, creative thinking, and genuine
        dedication.
        <br />
        <br />
        <span className="text-primary font-semibold">
          I don’t just write code — I express myself through it.
        </span>
      </p>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-secondary mb-4">
          Tech Stack I Love:
        </h3>
        <br />
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
          <span className="px-4 py-2 text-orange-400">
            <FaHtml5 size={44} />
          </span>
          <span className="px-4 py-2 text-blue-400">
            <FaCss3 size={44} />
          </span>
          <span className="px-4 py-2 text-yellow-400">
            <DiJavascript size={44} />
          </span>
          <span className="px-4 py-2 text-cyan-300">
            <RiReactjsLine size={44} />
          </span>
          <span className="px-4 py-2 text-cyan-300">
            <RiTailwindCssFill size={44} />
          </span>
          <span className="px-4 py-2 text-white-200">
            <TbBrandFramerMotion size={44} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
