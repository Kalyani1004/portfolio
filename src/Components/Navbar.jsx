import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
<header className="w-full backdrop-blur-xl bg-gradient-to-r from-[#13131a] via-[#171722] to-[#1c1c28] border-b border-white/5 text-white fixed top-0 left-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-6 px-6">
        
        {/* LOGO */}
        <h1 className="text-4xl font-bold tracking-wide">
          Kalyani Bharsat
        </h1>

        {/* MENU LINKS */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
          <a href="#home"
            to="/"
            className={({ isActive }) =>
              `transition-all duration-300 ${
      isActive
        ? "text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
        : "text-gray-400 hover:text-white hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
    }`
            }
          >
            Home
          </a>

          <a href="#about"
            to="/about"
            className={({ isActive }) =>
               `transition-all duration-300 ${
      isActive
        ? "text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
        : "text-gray-400 hover:text-white hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
    }`
            }
          >
            About
          </a>

          <a href="#projects"
            to="/projects"
            className={({ isActive }) =>
             `transition-all duration-300 ${
      isActive
        ? "text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
        : "text-gray-400 hover:text-white hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
    }`
            }
          >
            Projects
          </a>

          <a href="#skills"
            to="/expertise"
            className={({ isActive }) =>
               `transition-all duration-300 ${
      isActive
        ? "text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
        : "text-gray-400 hover:text-white hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
    }`
            }
          >
            Skills & Expertise
          </a>

          <a href="#contact"
            to="/contact"
            className={({ isActive }) =>
               `transition-all duration-300 ${
      isActive
        ? "text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
        : "text-gray-400 hover:text-white hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]"
    }`
            }
          >
            Contact
          </a>
        </ul>

        {/* MOBILE MENU ICON (Future use if needed) */}
        <button className="md:hidden text-gray-300 hover:text-purple-400">
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
