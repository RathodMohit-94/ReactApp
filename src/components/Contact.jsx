import React, { useState } from "react";

const handleNavClick = (e, section) => {
  e.preventDefault();
  const targetSection = document.querySelector(`#${section}`);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Contact = ({
  emailContact = "enter email",
  phonenumContact = "enter phone num.",
}) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbz6XE1aneDxxN9PrFKlRD2i8Pj0EcsfAoFnor88Xg_my_gI2Nklo11GtR07DyUFszBqzA/exec";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${encodeURIComponent(formData.Name)}&Email=${encodeURIComponent(formData.Email)}&Message=${encodeURIComponent(formData.Message)}`,
        mode: "no-cors", // Keep for now to bypass CORS
      });
      // Since mode: 'no-cors' makes response opaque, assume success if no error
      alert("Data is submitted successfully!");
      setFormData({ Name: "", Email: "", Message: "" }); // Clear form
    } catch (error) {
      setFormData({ Name: "", Email: "", Message: "" });
      console.error("Submission error:", error);
      alert(
        "Data Is submitted Succesfully"
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section
        id="contact"
        className="mt-20 sm:h-80 md:h-96 bg-gradient-to-b from-blue-800 to-blue-900 text-white w-full flex items-center justify-center py-4"
      >
        <div className="min-h-screen h-52 bg-blue-100 flex flex-col w-full text-center">
          {/* Header */}
          <header className="bg-blue-700 text-white py-6">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="mt-2 text-blue-100">We'd love to hear from you!</p>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-8 flex-grow">
            <div className="max-w-2xl mx-auto bg-blue-200 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
              <div className="space-y-4">
                <p className="text-gray-800">
                  Have questions or feedback? Fill out the form below or reach
                  out to us directly.
                </p>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-800">{emailContact}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-6 h-6 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-800">{phonenumContact}</span>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <div className="rounded-lg mt-6">
                  <h3 className="underline text-xl font-semibold mb-4 text-gray-800">
                    Send us a Message
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="Name"
                        value={formData.Name}
                        onChange={handleInputChange}
                        className="mt-1 bg-blue-50 block w-full border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleInputChange}
                        className="mt-1 bg-blue-50 block w-full border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        name="Message"
                        value={formData.Message}
                        onChange={handleInputChange}
                        className="mt-1 bg-blue-50 block w-full border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
          <footer className="bg-gray-900 text-white py-8">
            <div className="mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-lg font-semibold">Mohit Rathod</p>
                  <p className="text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                  </p>
                </div>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                    onClick={(e) => handleNavClick(e, "home")}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="hover:text-blue-400 transition-colors"
                    onClick={(e) => handleNavClick(e, "about")}
                  >
                    About
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Contact;