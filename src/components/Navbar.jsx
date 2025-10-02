import React, { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utilities/motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      {/*For the Links*/}
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16 ">
        {/*logo*/}
        <div className="flex items-center gap-1 cursor-pointer">
          <a className="text-2xl  " href="#home">
            Bella<span className="text-4xl text-pink-600">V</span>erse
          </a>
        </div>

        {/*Mobile menu*/}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 "
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/*nav links*/}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((navLink, index) => (
            <a
              key={index}
              href={navLink.href}
              onClick={() => setActiveLink(navLink.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-pink-600  after:transition-all ${
                activeLink === navLink.href
                  ? "text-pink-600 after:w-full"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {navLink.label}
            </a>
          ))}
        </div>

        {/*cta buttons*/}
        <button className="hidden md:block bg-pink-600 text-white px-8 py-2.5 rounded-lg hover:bg-pink-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-pink-100">
          <a href="#newsletter">Join the Vibe</a>
        </button>
      </div>

      {/*For mobile Menu*/}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-3 ">
            {navLinks.map((navLink, index) => (
              <a
                key={index}
                onClick={() => {
                  setActiveLink(navLink.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${
                  activeLink === navLink.href
                    ? "text-pink-600"
                    : "text-gray-600 hover:text-pink-600"
                }  `}
                href={navLink.href}
              >
                {navLink.label}
              </a>
            ))}
            <button
              className="w-full bg-pink-600 text-white px-8 py-2.5 rounded-lg hover:bg-pink-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-pink-100 "
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <a href="#newsletter">Join the Vibe</a>
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
