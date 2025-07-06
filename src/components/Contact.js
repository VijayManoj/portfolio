import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <motion.div 
        className="container mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold text-blue-400">Get in Touch</h2>
        <p className="mt-6 text-lg text-gray-300">
          Interested in collaborating or have a question? Let's connect!
        </p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
  className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
  whileHover={{ scale: 1.05 }}
>
  <FaEnvelope className="text-blue-400 text-4xl mb-2" />
  <p className="text-xl font-semibold text-blue-300">Email</p>
  <p className="text-gray-300 w-full text-center break-words">
    <a href="https://www.gmail.com">vijay.manoj.kota@gmail.com</a>
  </p>
</motion.div>

          
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone className="text-blue-400 text-3xl mb-2" />
            <p className="text-xl font-semibold text-blue-300">Phone</p>
            <p className="text-gray-300">+91 6304236807</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaLinkedin className="text-blue-400 text-3xl mb-2" />
            <p className="text-xl font-semibold text-blue-300">LinkedIn</p>
            <a 
              href="https://www.linkedin.com/in/vijay-manoj/" 
              className="text-blue-400 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >linkedin.com/in/vijay-manoj</a>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaGithub className="text-blue-400 text-3xl mb-2"/>
            <p className="text-xl font-semibold text-blue-300">GitHub</p>
            <a 
              href="https://github.com/VijayManoj" 
              className="text-blue-400 hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >VijayManoj</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
