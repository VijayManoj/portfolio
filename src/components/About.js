import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section id="about" className="section">
      <motion.div
        className="container max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          title="About Me"
          subtitle="Backend engineering, automation, and clean code—building scalable systems with Java and Spring Boot."
        />
        <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed text-center">
          Software Engineer specializing in backend development and DevOps with expertise in Java, Spring Boot, REST APIs, and microservices. At OPTUM, I design and deliver production-ready services, implement CI/CD with GitHub Actions, and containerize apps with Docker to ensure scalability and reliability. Previously at VIT SDC, I helped build large-scale portals used by 10,000+ users, improving efficiency by 30% through backend automation.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div className="glass p-6 rounded-xl shadow-lg" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-semibold text-brand-300">Education</h3>
            <p className="text-gray-200 mt-2">M.Tech Integrated (Software Engineering) — VIT University</p>
            <p className="text-gray-400">CGPA: 8.92 / 10</p>
          </motion.div>

          <motion.div className="glass p-6 rounded-xl shadow-lg" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-semibold text-brand-300">Experience</h3>
            <p className="text-gray-200 mt-2">Software Engineer at OPTUM</p>
          </motion.div>

          <motion.div className="glass p-6 rounded-xl shadow-lg" whileHover={{ scale: 1.02 }}>
            <h3 className="text-xl font-semibold text-brand-300">Hobbies</h3>
            <ul className="mt-2 text-gray-200 space-y-1 list-disc list-inside">
              <li>Cooking</li>
              <li>Badminton</li>
              <li>Listening to Music</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;