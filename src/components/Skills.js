import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { category: "Programming Languages", items: ["Java", "Python", "JavaScript"] },
  { category: "Databases", items: ["SQL", "PostgreSQL", "MongoDB"] },
  { category: "Frameworks/Libraries", items: ["Spring Boot", "REST API", "Microservices", "React JS", "Thymeleaf", "Spring MVC"] },
  { category: "Tools", items: ["AWS", "Eclipse", "IntellJ","Visual Studio Code", "GitHub", "Postman", "Apache Tomcat","JIRA"] },
  { category: "Testing Tools", items: ["Robot Framework", "Selenium", "Appium"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader title="Skills" subtitle="Technologies and tools I work with" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-brand-300">{skill.category}</h3>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-200">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
