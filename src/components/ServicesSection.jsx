import React from "react";
import { services } from "../assets/data";

const ServicesSection = () => {
  return (
    <section
      className=" relative py-15 container mx-auto px-4 sm:px-6 lg:px-8"
      id="services"
    >
      {/* gradient blob */}
      <div className="absolute bottom-28 right-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24  ">
        {/*header*/}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
            Stories That Spark, Vibes That Last
          </h2>
          <p className="text-gray-600 text-lg mb-4 md:w-4/5">
            No boring stuff—just vibes, lessons, and energy you can use daily.
          </p>

          {/*points*/}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <div className="text-2xl">✨</div>{" "}
              </div>
              <span className="text-gray-600">
                Energy, clarity, and knowledge
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <div className="text-2xl">🌸</div>{" "}
              </div>
              <span className="text-gray-600">
                Vibe of growth and positivity
              </span>
            </div>
          </div>

          {/*btn */}
          <button className="mt-8 bg-pink-600 px-8 py-3 text-white rounded-full cursor-pointer hover:bg-pink-700 transition-colors">
            Join the Vibe
          </button>
        </div>

        {/*service content*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="">
              <div className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="mb-4 text-3xl"> {service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-pink-600 font-medium hover:text-pink-700 transition-colors"
                >
                  ABEG SHOW ME
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
