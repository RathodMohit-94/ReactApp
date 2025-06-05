import React from 'react';
import picture from '../assets/imag3.jpg'

const About = ({
  classification = 'Write your classification',
  aboutself = 'Write About YOUR JOB Or Classification',
  writeAbout = 'Write about',
  birthday = 'DD/MM/YYYY',
  phoneNum = '+910000000000',
  cityState = 'City, State',
  age = 'Enter Age',
  email = 'Enter Your Email.',
  degree = 'details of degree',
  websiteLink = 'WebsiteDetails'
}) => {
  return (
    <section id="about" className="bg-gradient-to-t from-blue-700 to-blue-900 mt-0 pt-0 text-white min-h-screen sm:p-8 lg:p-16 w-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Header Section */}
            <div className="text-center" data-aos="fade-up">
              <h2 className="inline-block w-full sm:w-64 h-16 rounded-3xl text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-white bg-blue-800/30 px-4 py-2">
                About
              </h2>
              <p className="mt-2 text-base sm:text-lg lg:text-xl">{writeAbout}</p>
            </div>

            {/* Content Section */}
            <div className="mt-6 sm:mt-8 lg:mt-12" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center">
                {/* Image Section */}
                <div className="w-full lg:w-1/3">
                  <img
                    src={picture}
                    className="w-full h-auto max-w-xs sm:max-w-sm mx-auto rounded-lg shadow-lg object-cover"
                    alt="Profile"
                  />
                </div>
                {/* Details Section */}
                <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">{classification}</h2>
                  <p className="py-4 text-sm sm:text-base lg:text-lg">{aboutself}</p>
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <div className="w-full sm:w-1/2">
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-center">
                          <i className="bi bi-chevron-right mr-2 text-blue-300"></i>
                          <strong className="w-20 sm:w-24 font-medium">Birthday:</strong>
                          <span>{birthday}</span>
                        </li>
                        <li className="flex items-center">
                          <i className="bi bi-chevron-right mr-2 text-blue-300"></i>
                          <strong className="w-20 sm:w-24 font-medium">Website:</strong>
                          <span>{websiteLink}</span>
                        </li>
                        <li className="flex items-center">
                          <i className="bi bi-chevron-right mr-2 text-blue-300"></i>
                          <strong className="w-20 sm:w-24 font-medium">Phone:</strong>
                          <span>{phoneNum}</span>
                        </li>
                        <li className="flex items-center">
                          <i className="bi bi-chevron-right mr-2 text-blue-300"></i>
                          <strong className="w-20 sm:w-24 font-medium">City:</strong>
                          <span>{cityState}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                      <ul className="space-y-3 text-sm sm:text-base">
                        <li className="flex items-center">
                          <i className="bi bi-chevron-right mr-2 text-blue-300"></i>
                          <strong className="w-20 sm:w-24 font-medium">Age:</strong>
                          <span>{age}</span>
                        </li>
                        <li className="flex items-center">
                          <i className="bi bi-chevron-right mr-2 text-blue-300"></i>
                          <strong className="w-20 sm:w-24 font-medium">Degree:</strong>
                          <span>{degree}</span>
                        </li>
                        <li className="flex items-center">
                          <i className="bi bi-chevron-right mr-2 text-blue-300"></i>
                          <strong className="w-20 sm:w-24 font-medium">Email:</strong>
                          <span>{email}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default About;