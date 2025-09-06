import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-fuchsia-400 to-cyan-400 animate-shine bg-[length:200%_auto]">
          {title}
        </span>
      </motion.h2>
      {subtitle && (
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
