import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <motion.div 
        className="container mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold text-blue-400">About Me</h2>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I am a passionate <span className="text-blue-300 font-semibold">Software Engineer</span> with over 2 years of experience in
          full-stack development and automation testing. My expertise lies in designing scalable applications,
          enhancing user experience, and ensuring software quality through clean and efficient coding practices.
        </p>
        <div className="mt-10 flex justify-center gap-6">
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg shadow-lg w-72"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-semibold text-blue-300">Education</h3>
    <p className="text-gray-300 mt-2">M.Tech Integrated (Software Engineering) - VIT University</p>
    <p className="text-gray-400">CGPA: 8.92 / 10</p>
  </motion.div>
  
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg shadow-lg w-72"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-semibold text-blue-300">Experience</h3>
    <p className="text-gray-300 mt-2">Software Engineer at VIT University</p>
    {/* <p className="text-gray-400">QA Tester at Nokia Networks</p> */}
  </motion.div>

  <motion.div 
    className="bg-gray-800 p-6 rounded-lg shadow-lg w-72"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-semibold text-blue-300">Hobbies</h3>
    <p className="text-gray-300 mt-2">Cooking</p>
    <p className="text-gray-300 mt-2">Badminton</p>
    <p className="text-gray-300 mt-2">Listen to Music</p>
  </motion.div>
</div>

      </motion.div>
    </section>
  );
};

export default About;