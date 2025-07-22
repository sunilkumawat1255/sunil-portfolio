import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = ({ theme }) => {
  return (
    <section
      id="contact"
      className={`w-full px-6 py-20 md:px-16 transition-all duration-500 ${
        theme === "light"
          ? "bg-[#f8faff] text-black"
          : "bg-[#0f172a] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Let’s <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-lg mb-6">
            I’m always open to discussing new projects, creative ideas or
            opportunities to be part of your vision. 👋
          </p>

          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sunilkumawat1255@gmail.com"
              className="hover:text-blue-500"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// bg-[#0f172a]
// ye upper wala color change kiya hu
// bg-[#111]
