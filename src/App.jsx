import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-black text-gray-500 h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
  <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
    <Navbar />

    <section id="hero" className="snap-start min-h-screen py-20">
      <Hero />
    </section>

    <section id="about" className="snap-start py-20">
      <About />
    </section>

    <section id="projects" className="snap-start py-20">
      <Projects />
    </section>

    <section id="contact" className="snap-start py-20">
      <Contact />
    </section>
  </div>
</div>

  );
};

export default App;
