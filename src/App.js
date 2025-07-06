import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { motion } from "framer-motion";

function App() {
  return (
    <motion.div 
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Home />
      <About />
     <Experience />
     <Skills />

      <Projects />
      <Contact />
    </motion.div>
  );
}

export default App;