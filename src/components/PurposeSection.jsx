import React from "react";
import { features } from "../assets/data";

const PurposeSection = () => {
  return (
    <section
      className="w-full  py-13 px-4 sm:px-6 md:px-8 relative min-h-screen overflow-x-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="mx-auto max-w-6xl absolute bottom-28 right-28 w-[500px] h-[500px] bg-gradient-to-tr  from-red-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10" />
      <div className="overflow-hidden">
        {/*text side*/}
        <div className="  px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            When BellaVerse enter your mind, wetin suppose show?
          </h2>
          <p className="text-gray-900 text-[1rem]">
            {" "}
            This is the the flex we’re known for💎:
          </p>
        </div>

        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 justify-between gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg flex text-xl">
                {feature.icon}
              </div>
              <div className="">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
