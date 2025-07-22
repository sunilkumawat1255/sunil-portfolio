import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`w-full px-6 md:px-16 py-12 transition-all duration-500 ${
        theme === "light"
          ? "bg-[#f8faff] text-gray-800"
          : "bg-[#0f172a] text-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h1 className="text-2xl font-bold mb-2 text-blue-500">
            Sunil Kumawat
          </h1>
          <p className="text-sm leading-6">
            Passionate Frontend Developer skilled in React, Tailwind CSS, and
            modern web design. BCA Student from Shekhawati Group of
            Institutions, Sikar (2022–2025).
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaArrowRight size={12} /> Home
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaArrowRight size={12} /> About
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaArrowRight size={12} /> Projects
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaArrowRight size={12} /> Contact
            </li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Connect</h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/sunilkumawat1255"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sunil-kumawat-54096a289"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:sunilkumawat1255@gmail.com"
              className="hover:text-blue-500 transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-10 text-xs border-t pt-4 border-gray-400 dark:border-gray-700">
        © {new Date().getFullYear()} Sunil Kumawat | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// bg-[#0f172a]
