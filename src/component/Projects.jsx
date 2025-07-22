import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React and Tailwind CSS showcasing my work and skills.",
    image: "https://via.placeholder.com/400x200?text=Portfolio", // Replace with real image
    tech: ["React", "TailwindCSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    title: "E-commerce App",
    description:
      "A fully responsive e-commerce frontend using modern React patterns.",
    image: "https://via.placeholder.com/400x200?text=E-commerce", // Replace with real image
    tech: ["React", "TailwindCSS", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    description:
      "A weather app using OpenWeatherMap API to show real-time weather of any city.",
    image: "https://via.placeholder.com/400x200?text=Weather+App", // Replace with real image
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
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

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-[#1e293b] text-white"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-blue-500 transition" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink className="hover:text-blue-500 transition" />
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
