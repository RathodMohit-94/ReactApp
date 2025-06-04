import React from 'react';

// Fixed props destructuring syntax and default values
const Hero = ({ title = "Set Title", header = "Set Header..." }) => {
  return (
    <section id='home' className="h-auto mt-20 sm:h-80 sm:pt-4 md:pt-4 md:h-96 bg-gradient-to-b pb-0 mb-0 from-blue-700 to-blue-900 text-white w-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              {header}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
              {title}
            </p>
            {/* <a
              href="#get-started"
              className="inline-block bg-white text-blue-600 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </a> */}
          </div>
        </section>
  );
};

export default Hero;