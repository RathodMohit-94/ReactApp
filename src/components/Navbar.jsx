import React, { useState } from "react";
import logo from "../assets/1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e, section) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector(`#${section}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    // Close the menu on mobile after clicking a link
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 right-0 left-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Toggle Button (Visible on Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static top-16 left-0 right-0 bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out flex flex-col md:flex-row items-center`}
        >
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "home")}
            className="hover:text-gray-300 transition-colors duration-200 text-lg font-medium block md:inline-block py-2 md:py-0"
          >
            Home
          </a>
          <a
            href="/"
            data-nav-section="about"
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:text-gray-300 transition-colors duration-200 text-lg font-medium block md:inline-block py-2 md:py-0"
          >
            About Us
          </a>
          <a
            href="/"
            data-nav-section="resume"
            onClick={(e) => handleNavClick(e, "resume")}
            className="hover:text-gray-300 transition-colors duration-200 text-lg font-medium block md:inline-block py-2 md:py-0"
          >
            Resume
          </a>
          <a
            href="/"
            data-nav-section="contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-gray-300 transition-colors duration-200 text-lg font-medium block md:inline-block py-2 md:py-0"
          >
            Contact Us
          </a>
        </div>

        {/* Right side - Logo */}
        <div className="bg-slate-200 rounded-lg h-auto">
          <a href="/">
            <img
              className="w-12 h-12 rounded-2xl"
              src={logo}
              alt="Logo"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;