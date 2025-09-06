import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center relative pt-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/5 to-transparent" aria-hidden />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 text-xs md:text-sm rounded-full bg-white/10 border border-white/10 text-gray-200">
            Backend Engineer • Java • Spring Boot • DevOps
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-brand-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Vijay Manoj Kota</span>
          </h1>
          <p className="text-base md:text-lg mt-4 text-gray-300 font-medium">
            Software Engineer | Enthusiast
          </p>
          <div className="mt-6 max-w-3xl mx-auto glass rounded-xl p-4 sm:p-5 border border-white/10">
            <p className="text-[15px] sm:text-base md:text-lg leading-relaxed text-gray-200">
              <span className="font-semibold text-white">Backend-focused Software Engineer</span> with <span className="text-brand-400 font-semibold">2+ years</span> of experience in <span className="bg-gradient-to-r from-brand-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold">Java</span>, <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent font-semibold">Spring Boot</span>, <span className="text-brand-300 font-medium">REST APIs</span>, and <span className="text-brand-300 font-medium">microservices</span>. Skilled in <span className="text-brand-300 font-medium">CI/CD</span>, <span className="text-brand-300 font-medium">Docker</span>, <span className="text-brand-300 font-medium">unit testing</span>, and managing <span className="text-brand-300 font-medium">Kubernetes</span> pods/clusters to ensure reliable deployments. Proven track record of building <span className="text-brand-300 font-medium">scalable backend systems</span> and automating processes to improve efficiency.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#experience"
              className="px-6 py-3 rounded-lg font-semibold shadow-glow bg-brand-500 hover:bg-brand-600 transition-colors duration-300 w-48 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center gap-2 w-48 justify-center"
            >
              Let's Connect <FaArrowDown className="animate-bounce" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;