import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white pt-28">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="max-w-4xl px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wider uppercase">
          Hi, I'm <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Vijay Manoj Kota</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-300 font-medium">
          Software Engineer | Enthusiast
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-400 leading-relaxed">
        I excel in developing scalable, high-performance applications and designing impactful automation solutions. My enthusiasm for leveraging cutting-edge technologies drives me to create seamless user experiences and enhance development workflows. Whether tackling complex challenges or optimizing processes, I am passionate about transforming ideas into efficient, innovative solutions.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a 
            href="#experience" 
            className="bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-lg w-48 text-center"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold hover:bg-gray-700 transition duration-300 flex items-center gap-2 shadow-lg w-48 justify-center"
          >
            Let's Connect <FaArrowDown className="animate-bounce" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;