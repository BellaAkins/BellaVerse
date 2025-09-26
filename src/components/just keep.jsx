import React from "react";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto  flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/*Left column*/}
      <div className="w-full md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We boost the growth for{" "}
          <span className="text-blue-600 relative inline-block">
            {" "}
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>{" "}
          Companies
          <span className="inline-block ml-2 animate-pulse">⏰</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </p>
        {/*input email*/}
        <div className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border-gray-200 rounded-xl focus:outline-none
             focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button
            className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 cursor-pointer
          transition-all hover:shadow-lg hover:shadow-blue-300"
          >
            →
          </button>
        </div>
      </div>

      {/*Right column*/}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
        <div className="relative">
          <img
            src={heroImage}
            alt="hero-image"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
