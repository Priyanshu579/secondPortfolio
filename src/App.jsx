import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-black text-gray-500 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth m-10">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 space-y-10">
      <Navbar />
      <section id="hero" className="snap-center min-h-[95vh] py-10">
        <Hero />
      </section>
      <section id="about" className="snap-center min-h-[95vh] py-10">
        <About />
      </section>
      <section id="projects" className="snap-center min-h-[95vh] py-10">
        <Projects />
      </section>
      <section id="contact" className="snap-center min-h-[95vh] py-10">
        <Contact />
      </section>
    </div>
    </div>
  );
};

export default App;
