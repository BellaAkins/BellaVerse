import React from "react";
import { HiArrowRight } from "react-icons/hi";

const NewsletterSection = () => {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      id="newsletter"
    >
      <div className="bg-pink-600 rounded-2xl ">
        <div className="relative md:px-16 py-16 px-6 md:py-24">
          {/*gradient*/}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-700 clip-path-slant hidden md:block"></div>
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/*Left content*/}
            <div className="text-white max-w-lg text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 md:text-left">
                Subscribe to our newsletter
              </h2>
              <p className="text-pink-300 text-sm sm:text-base">
                Career gist, lifestyle cruise, self-care tea—subscribe make we
                run am
              </p>
            </div>

            {/*Right content*/}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 ">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full bg-white sm:w-auto md:w-60 px-4 sm:px-6 py-3 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
              />
              <button className="w-full sm:w-auto cursor-pointer bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2">
                <span>Discover</span>
                <HiArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
