import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section id="contact" className="section text-center">
      <motion.div
        className="container max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader title="Get in Touch" subtitle="Interested in collaborating or have a question? Let's connect!" />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div className="glass p-6 rounded-xl shadow-lg flex flex-col items-center" whileHover={{ scale: 1.03 }}>
            <FaEnvelope className="text-brand-400 text-4xl mb-2" />
            <p className="text-lg font-semibold text-brand-300">Email</p>
            <a
              className="mt-1 text-gray-200 hover:text-white text-center w-full break-words break-all"
              href="mailto:vijay.manoj.kota@gmail.com"
              aria-label="Send email to vijay.manoj.kota@gmail.com"
            >
              vijay.manoj.kota@gmail.com
            </a>
          </motion.div>

          <motion.div className="glass p-6 rounded-xl shadow-lg flex flex-col items-center" whileHover={{ scale: 1.03 }}>
            <FaPhone className="text-brand-400 text-3xl mb-2" />
            <p className="text-lg font-semibold text-brand-300">Phone</p>
            <a className="text-gray-200 hover:text-white" href="tel:+916304236807">+91 6304236807</a>
          </motion.div>

          <motion.div className="glass p-6 rounded-xl shadow-lg flex flex-col items-center" whileHover={{ scale: 1.03 }}>
            <FaLinkedin className="text-brand-400 text-3xl mb-2" />
            <p className="text-lg font-semibold text-brand-300">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/vijay-manoj/"
              className="text-brand-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/vijay-manoj
            </a>
          </motion.div>

          <motion.div className="glass p-6 rounded-xl shadow-lg flex flex-col items-center" whileHover={{ scale: 1.03 }}>
            <FaGithub className="text-brand-400 text-3xl mb-2" />
            <p className="text-lg font-semibold text-brand-300">GitHub</p>
            <a
              href="https://github.com/VijayManoj"
              className="text-brand-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              VijayManoj
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
