import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="bg-gradient-to-b from-blue-700 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-6 underline  ">Resume</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold mb-4">Summary</h3>
            <div className="mb-8">
              <h4 className="text-xl font-bold">Mohit Rathod</h4>
              <p className="italic mb-4">
                I am a motivated graduate pursuing a BSc in Artificial Intelligence and Data Science (AI & DS). My passion lies in leveraging my technical skills in software development, data analysis, and machine learning to drive efficiency and automation in real-world projects. I am eager to apply my knowledge to practical solutions and contribute to efficient technical problem-solving.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="mb-8">
              <h4 className="text-xl font-bold">S.S.C</h4>
              <h5 className="text-lg mb-2">May-2021</h5>
              <p className="italic mb-2">Bhavik Vidyalaya</p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold">H.S.C</h4>
              <h5 className="text-lg mb-2">Mar-2023</h5>
              <p className="italic mb-2">MangalDeep Vidyalaya</p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold">BSc (AI & DS)</h4>
              <h5 className="text-lg mb-2">2023-Present (Pursuing)</h5>
              <p className="italic mb-2">KN University</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold mb-4">Projects</h3>
            <div className="mb-8">
              <h4 className="text-xl font-bold">Website Using Flask</h4>
              <p className="mb-2">
                Seeking opportunities to apply knowledge in software development, data analysis, and machine learning to real-world projects. Focused on practical solutions and efficiency in technical problem-solving.
              </p>
              <p className="italic">
                <a href="https://networkservice.pythonanywhere.com" target="_blank" rel="noopener noreferrer">
                  Hosted at NETWORKSERVICE.PYTHONANYWHERE.COM
                </a>
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold">Online Assignment Submission</h4>
              <p className="mb-2">Connected data with Sheets.</p>
              <p className="italic">
                <a href="https://bsc-cpp.web.app/23010303020" target="_blank" rel="noopener noreferrer">
                  Accessible at https://bsc-cpp.web.app/23010303020
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;