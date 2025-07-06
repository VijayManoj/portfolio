import { motion } from "framer-motion";

const skills = [
  { category: "Programming Languages", items: ["Java", "Python", "JavaScript"] },
  { category: "Databases", items: ["SQL", "PostgreSQL", "MongoDB"] },
  { category: "Frameworks/Libraries", items: ["Spring Boot", "REST API", "Microservices", "React JS", "Thymeleaf", "Spring MVC"] },
  { category: "Tools", items: ["AWS", "Eclipse", "IntellJ","Visual Studio Code", "GitHub", "Postman", "Apache Tomcat","JIRA"] },
  { category: "Testing Tools", items: ["Robot Framework", "Selenium", "Appium"] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-blue-400 text-center">Skills</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-blue-300">{skill.category}</h3>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
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
