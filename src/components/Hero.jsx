import React from "react";
import heroImage from "../assets/hero-image.jpg";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../utilities/motion";

const Hero = () => {
  return (
    <section
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-34 pb-6 px-4 sm:px-6 lg:px-6"
      id="home"
    >
      {/*Left column*/}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight"
        >
          Life dey happen
          <span className="text-pink-600 inline-block">
            grow, glow, and catch vibes
          </span>{" "}
          steady
          <span className="inline-block ml-2 animate-pulse">🌸💡</span>
        </motion.h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl ">
          Because growth isn’t boring—it’s messy, exciting, and full of
          surprises. Here, you’ll find stories, lessons, and ideas that help you
          learn, explore, and glow up
        </p>
        {/*input email*/}
        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email address"
            className="flex-1  px-5 py-4 border border-pink-300 rounded-xl focus:outline-none focus:border-pink-600 
           transition-all"
          />
          <button
            className="bg-pink-600 text-white px-6 py-4 rounded-2xl hover:bg-pink-700 cursor-pointer
          transition-all hover:shadow-lg hover:shadow-pink-300 "
          >
            →
          </button>
        </div>
      </div>

      {/*Right column*/}
      {/*Right column*/}
      <motion.div
        variants={slideIn("right", "tween", 0.3, 0.8)} // 👈 using slideIn here
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Hero visual"
            className="rounded-4xl relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
