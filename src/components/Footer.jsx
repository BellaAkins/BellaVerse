import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaX } from "react-icons/fa6";
import { footerLinks } from "../assets/data";

const Footer = () => {
  return (
    <footer className="bg-gray-50 relative">
      <div className="mx-auto max-w-6xl absolute bottom-28 right-28 w-[500px] h-[500px] bg-gradient-to-tr  from-red-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/*bellaverse logo */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1 mb-4 ">
              <a className="text-2xl  " href="#home">
                Bella<span className="text-4xl text-pink-600">V</span>erse
              </a>
            </div>
            <p className="text-gray-600 mb-6 md:w-3/4">
              Your journey deserves vibes, not stress. BellaVerse blends career
              moves, lifestyle hacks, and self-care gems for the culture.
            </p>

            {/*icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
               text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-200"
              >
                <FaFacebook className="size-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
               text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-200"
              >
                <FaTwitter className="size-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center
               text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-200"
              >
                <FaInstagram className="size-5" />
              </a>
            </div>
          </div>

          {/*footer nav*/}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(
                ([category, Links], categoryIndex) => (
                  <div key={category} className="">
                    <h3 className="text-lg font-medium mb-4 uppercase">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {Links.map((link, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/*bottom footer*/}
        <div className="border-t border-gray-200 mt-12 pt-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              Copyright © {new Date().getFullYear()} Bella.dev
            </p>
            <p className="text-600 text-sm text-gray-600">
              Created by SaraBella
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
