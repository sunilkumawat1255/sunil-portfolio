import React from "react";
import Navbar from "./component/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    // <div className={`container ${theme}`}>
    <div
      className={`w-full min-h-screen transition-all duration-500 ${
        theme === "light" ? "bg-white text-black" : "bg-[#0f172a] text-white"
      }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
