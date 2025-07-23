

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Images comes from assets folder
import PortfolioImg from "../../src/assets/portfolio.png";
import FruitshopImg from "../../src/assets/Fruitshop.png";
// import WeatherImg from "../../src/assets/weather.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React and Tailwind CSS showcasing my work and skills.",
    image: PortfolioImg,
    tech: ["React", "TailwindCSS", "JavaScript"],
    github: "https://github.com/sunilkumawat1255/sunil-portfolio",
    live: "https://sunilk-portfolio.vercel.app/",
  },
  {
    title: "Fruitshop E-commerce",
    description:
      "A full-stack FruitShop web app with separate frontend and backend repos.",
    image: FruitshopImg,
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    githubClient: "https://github.com/sunilkumawat1255/client.git",
    githubServer: "https://github.com/sunilkumawat1255/server.git",
    live: "http://fruitshop-project.vercel.app",
  },
  {
    title: "Weather App",
    description:
      "A weather app using OpenWeatherMap API to show real-time weather of any city.",
    // image: WeatherImg,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/your-repo/weather",
    live: "https://weather-app.vercel.app/",
  },
];

const Projects = ({ theme }) => {
  return (
    <section
      id="projects"
      className={`py-16 px-5 md:px-20 ${
        theme === "light" ? "bg-[#f8faff]" : "bg-[#0f172a]"
      }`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-10 text-center ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        My Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-md shadow-sm p-2 overflow-hidden transition transform hover:-translate-y-2 shadow-teal-700 ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-[#1e293b] text-white"
            }`}
          >
            {/* Clickable image */}
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain"
              />
            </a>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-xl">
                {/* If this is the Fruitshop project (index === 1), show both GitHub links */}
                {index === 1 ? (
                  <>
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Frontend Code"
                    >
                      <FaGithub className="hover:text-blue-500 transition" />
                    </a>
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Backend Code"
                    >
                      <FaGithub className="hover:text-green-500 transition" />
                    </a>
                  </>
                ) : (
                  // For all other projects, single GitHub link
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="hover:text-blue-500 transition" />
                  </a>
                )}
                {/* Live preview link (all projects) */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Preview"
                >
                  <FiExternalLink className="hover:text-purple-500 transition" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section> 
  );
};

export default Projects;
