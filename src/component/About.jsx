import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
];

const About = ({ theme }) => {
  return (
    <section
      id="about"
      className={`w-full py-20 px-6 md:px-16 transition-all duration-500 ${
        theme === "light"
          ? "bg-[#f8faff] text-black"
          : "bg-[#0f172a] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        {/* Skills Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className={`w-full max-w-[240px] min-h-[200px] p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center space-y-4 transition-all duration-300 cursor-pointer
                ${
                  theme === "light"
                    ? "bg-blue-100 hover:bg-blue-200"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
            >
              {skill.icon}
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">
            Education
          </h3>
          <div
            className={`p-4 rounded-xl shadow-sm ${
              theme === "light" ? "bg-gray-100" : "bg-slate-700"
            }`}
          >
            <p className="text-lg font-medium">
              BCA — Shekhawati Group of Institution, Sikar, Rajasthan
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              2022 – 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
