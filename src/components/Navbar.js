import { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50" role="navigation" aria-label="Main">
      {/* Full-bleed background bar */}
      <div className="glass rounded-b-xl shadow-lg">
        {/* Centered content container */}
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between md:grid md:grid-cols-3 md:items-center py-3">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-400 text-3xl focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
  <div className="flex items-center gap-2 md:col-start-1 md:justify-self-start">
          <FaCode className="text-brand-400 text-3xl animate-float" />
          <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-brand-400 to-fuchsia-400 bg-clip-text text-transparent tracking-tight">
            Vijay Manoj
          </h1>
        </div>

        {/* Desktop Navigation */}
         <ul className="hidden md:flex items-center gap-10 text-base lg:text-lg font-semibold md:col-start-3 md:justify-self-end">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Experience", link: "#experience" },
            { name: "Skills", link: "#skills" },
            { name: "Projects", link: "#projects" },
            { name: "Contact", link: "#contact" },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.link}
                className="text-white hover:text-brand-400 transition-colors duration-300 px-3 py-2 rounded"
              >
                {item.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
          {/* Empty middle column on desktop for spacing */}
          <div className="hidden md:block md:col-start-2" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass shadow-xl">
          <ul className="flex flex-col space-y-2 py-4 text-center">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Experience", link: "#experience" },
              { name: "Skills", link: "#skills" },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-200 hover:text-brand-400 transition-colors duration-300 block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
