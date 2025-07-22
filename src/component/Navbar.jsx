// import React, { useState } from "react";
// import logo_light from "../../assets/logo-black.png";
// import logo_dark from "../../assets/logo-white.png";
// import search_icon_light from "../../assets/search-w.png";
// import search_icon_dark from "../../assets/search-b.png";
// import toggle_light from "../../assets/night.png";
// import toggle_dark from "../../assets/day.png";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = ({ theme, setTheme }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggle_mode = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const menuItems = ["Home", "About", "Projects", "Contact"];

//   return (
//     <nav
//       className={`w-full fixed top-0 z-50 shadow-md transition-all duration-300 ${
//         theme === "light" ? "bg-white text-black" : "bg-[#0f172a] text-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-10">
//         {/* Logo */}
//         <img
//           src={theme === "light" ? logo_light : logo_dark}
//           alt="Logo"
//           className="w-36"
//         />

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 font-medium">
//           {menuItems.map((item, i) => (
//             <li
//               key={i}
//               className="cursor-pointer hover:text-blue-500 transition"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4">
//           {/* Search */}
//           <div className="hidden sm:flex items-center gap-2 bg-gray-800 text-white px-4 py-1 rounded-full dark:bg-white dark:text-black">
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-transparent outline-none text-sm placeholder:text-white dark:placeholder:text-black"
//             />
//             <img
//               src={theme === "light" ? search_icon_light : search_icon_dark}
//               alt="Search"
//               className="w-4 cursor-pointer"
//             />
//           </div>

//           {/* Theme Toggle */}
//           <img
//             src={theme === "light" ? toggle_light : toggle_dark}
//             onClick={toggle_mode}
//             alt="Toggle Theme"
//             className="w-8 cursor-pointer"
//           />

//           {/* Hamburger Menu */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden text-2xl"
//           >
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <ul
//           className={`md:hidden flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
//             theme === "light"
//               ? "bg-white text-black"
//               : "bg-[#0f172a] text-white"
//           }`}
//         >
//           {menuItems.map((item, i) => (
//             <li
//               key={i}
//               className="cursor-pointer text-lg font-medium hover:text-blue-500"
//             >
//               {item}
//             </li>
//           ))}

//           {/* Mobile Search */}
//           <div className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full dark:bg-white dark:text-black">
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-transparent outline-none text-sm placeholder:text-white dark:placeholder:text-black"
//             />
//             <img
//               src={theme === "light" ? search_icon_light : search_icon_dark}
//               alt="Search"
//               className="w-4 cursor-pointer"
//             />
//           </div>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// upper ke code me issue ye tha ki jo medium device h usme jo search baar left me chipak raha tha so and link pe click karne pe redirect na ho raha tha particular section pe

import React, { useState } from "react";
import search_icon_light from "../../src/assets/search-w.png";
import search_icon_dark from "../../src/assets/search-b.png";
import toggle_light from "../../src/assets/night.png";
import toggle_dark from "../../src/assets/day.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 shadow-md transition-all duration-300 ${
        theme === "light"
          ? "bg-[#f8faff] text-black"
          : "bg-[#0f172a] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-4 md:px-10">
        {/* Logo */}
        {/* <img
          src={theme === "light" ? logo_light : logo_dark}
          alt="Logo"
          className="w-36"
        /> */}
        <div className="text-2xl font-extrabold tracking-tight italic font-mono">
          <span
            className={`${theme === "light" ? "text-gray-800" : "text-white"}`}
          >
            Sunil<span className="text-blue-500">-K</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium items-center">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:text-blue-500 transition cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center gap-2 bg-gray-800 text-white px-4 py-1 rounded-full dark:bg-white dark:text-black">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm placeholder:text-white  dark:placeholder:text-black"
            />
            <img
              src={theme === "light" ? search_icon_light : search_icon_dark}
              alt="Search"
              className="w-4 cursor-pointer"
            />
          </div>

          {/* Theme Toggle */}
          <img
            src={theme === "light" ? toggle_light : toggle_dark}
            onClick={toggle_mode}
            alt="Toggle Theme"
            className="w-8 cursor-pointer"
          />

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          className={`md:hidden flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
            theme === "light"
              ? "bg-white text-black"
              : "bg-[#0f172a] text-white"
          }`}
        >
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="cursor-pointer text-lg font-medium hover:text-blue-500"
                onClick={() => setMenuOpen(false)} // Close menu after click
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Mobile Search */}
          <div className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full dark:bg-white dark:text-black">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm placeholder:text-white dark:placeholder:text-black"
            />
            <img
              src={theme === "light" ? search_icon_light : search_icon_dark}
              alt="Search"
              className="w-4 cursor-pointer"
            />
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
