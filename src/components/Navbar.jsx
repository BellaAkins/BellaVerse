import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-yellow-400 backdrop-blur-sm border-b border-gray-100">
      {/*For the Links*/}
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16 ">
        {/*logo*/}
        <div className="flex items-center gap-1 cursor-pointer">
          <h2 className="">
            Bella<span>Verse</span>
          </h2>
        </div>

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
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {navLink.label}
            </a>
          ))}
        </div>

        {/*buttons*/}
        <button className="hidden md:block bg-pink-600 text-white px-8 py-2.5 rounded-lg hover:bg-pink-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-pink-100">
          <a href="#">Let's Talk</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
