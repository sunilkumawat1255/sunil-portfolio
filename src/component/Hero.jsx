// import React from "react";

// const Hero = ({ theme }) => {
//   return (
//     <section
//       id="home"
//       className={`w-full min-h-screen flex flex-col justify-center items-center px-4 text-center transition-all duration-500 ${
//         theme === "light" ? "bg-[#ced8ff] text-black" : "bg-[#222] text-white"
//       }`}
//     >
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">
//         Hi, I'm Sunil Kumawat
//       </h1>
//       <h2 className="text-2xl md:text-3xl text-blue-500 font-semibold mb-6">
//         Frontend Developer
//       </h2>
//       <p className="max-w-2xl text-lg mb-8">
//         I design and develop responsive web applications using modern
//         technologies like React, TailwindCSS, and JavaScript. Passionate about
//         building clean UI and smooth UX.
//       </p>

//       <div className="flex gap-4">
//         <a
//           href="/Sunil_Kumawat_Resume.pdf"
//           download
//           className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
//         >
//           Download Resume
//         </a>
//         <a
//           href="#contact"
//           className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
//         >
//           Hire Me
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";

const Hero = ({ theme }) => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`w-full min-h-screen flex flex-col justify-center items-center px-4 text-center transition-all duration-500 ${
        theme === "light"
          ? "bg-[#f8faff] text-black"
          : "bg-[#0f172a] text-white"
      }`}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        Hi, I'm Sunil Kumawat
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl text-blue-500 font-semibold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Frontend Developer
      </motion.h2>

      <motion.p
        className="max-w-2xl text-lg mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        I design and develop responsive web applications using modern
        technologies like React, TailwindCSS, and JavaScript. Passionate about
        building clean UI and smooth UX.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="/Sunil_Kumawat_Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
        >
          Download Resume
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
        >
          Hire Me
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
