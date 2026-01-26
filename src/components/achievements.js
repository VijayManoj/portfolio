import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FaTrophy, FaStar, FaMedal } from "react-icons/fa";

const awards = [
  {
    title: "Shining Star Award",
    company: "OPTUM",
    year: "2025",
    description: "Awarded for exceptional performance and impact",
    icon: FaStar,
    color: "text-yellow-400"
  },
  {
    title: "Top Performer",
    company: "OPTUM",
    year: "2025",
    description: "Recognized on two separate occasions for outstanding contributions",
    icon: FaTrophy,
    color: "text-amber-400"
  },
  {
    title: "Production-Ready Code Excellence",
    company: "OPTUM",
    year: "2025",
    description: "Consistently delivered high-quality, production-ready code from Day One",
    icon: FaMedal,
    color: "text-blue-400"
  }
];

const Awards = () => {
  return (
    <section id="awards" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader 
          title="Recognition & Awards" 
          subtitle="Achievements and accolades from organizations" 
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl shadow-lg border border-white/10 hover:border-brand-400/50 transition-colors duration-300"
                whileHover={{ scale: 1.05, translateY: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className={`text-3xl ${award.color}`} />
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/10 text-gray-300">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-brand-300 mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{award.company}</p>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export { awards };
export default Awards;