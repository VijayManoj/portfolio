import { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-800 fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-400 text-3xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaCode className="text-blue-400 text-3xl" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Vijay Manoj
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Experience", link: "#experience" },
            { name: "Contact", link: "#contact" },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.link}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 text-center">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Experience", link: "#experience" },
              { name: "Contact", link: "#contact" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-300 hover:text-blue-400 transition duration-300 block py-2"
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
