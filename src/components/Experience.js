import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "OPTUM",
    role:"Senior Software Engineer",
    duration: "Apr 2025 – Present",
    location: "Hyderabad, Telangana",
    responsibilities: [
      "Driving API design and delivery within the team and coordinating with parallel teams to ensure consistency and seamless integration across shared services. Acted as the team’s technical representative in cross-functional discussions with external teams to define feature requirements, resolve dependencies, and align on scalable solutions within Optum’s enterprise platform.",
      "Designed, developed, and maintained high-availability Spring Boot microservices supporting mission-critical workflows, ensuring resilient and fault-tolerant service operation in production environments.",
      "Optimized database queries and service interactions, reducing API response latency and enhancing overall throughput and reliability.",
      "Contributed to CI/CD automation efforts using GitHub Actions, supporting build, test, and deployment workflows to improve release consistency and reduce manual intervention.",
      "Collaborated closely with business stakeholders and QA teams to deliver compliant, performance-tested solutions aligned with global healthcare standards.",
      "Participated in production deployments, coordinating release activities, validating deployment health, and ensuring smooth rollout of services in enterprise production environments.",
      "Participated in DevOps activities including deployment automation, environment configuration, and application monitoring using tools such as Splunk, Grafana, Dynatrace and GitHub Actions.",
      "Conducted technical code reviews, promoting clean architecture principles and improving test coverage, which contributed to a reduction in production defects."
    ]
  },
  {
    company: "VIT Software Development Cell",
    role: "Software Engineer (Full Stack Developer)",
    duration: "Jul 2023 – Apr 2025",
    location: "Amaravati, Andhra Pradesh",
    responsibilities: [
      "Developed and maintained university portals (Examinations, Academics, Admissions, Finance) using Spring Boot, REST APIs, and Microservices, improving system efficiency by 30%.",
      "Designed and implemented a Quiz Portal and Question Bank Portal using Spring Boot, JavaScript, HTML, and Thymeleaf, enabling seamless MCQ-based exam management for 5,000+ students and faculty.",
      "Integrated new features into the University Portal, enhancing functionality and user experience, resulting in a 20% increase in user engagement.",
      "Automated critical processes in the Examinations module, including Exam Scheduling and Seating Arrangement, reducing manual effort by 50%.",
      "Deployed applications using Apache Tomcat Server, ensuring smooth production operations and minimizing downtime."
    ]
  },
  {
    company: "Nokia Networks Solutions",
    role: "QA Tester (Automation & Manual Testing)",
    duration: "Sep 2022 – Jun 2023",
    location: "Chennai, Tamil Nadu",
    responsibilities: [
      "Conducted smoke testing to validate app updates and executed comprehensive test cases for enhancement tickets.",
      "Automated test suites using the Robot Framework, improving testing precision and reducing execution time.",
      "Troubleshot application issues, verified functionalities, and ensured seamless performance of the Nokia Wi-Fi Mobile App, website, and hardware."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader title="Experience" subtitle="Roles and responsibilities across organizations" />
        <div className="mt-8 grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass p-6 md:p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-brand-300">{exp.role}</h3>
              <p className="text-gray-400 text-sm md:text-base mt-1">
                {exp.company} | {exp.duration} | {exp.location}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-200 text-sm md:text-base">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export { experiences };
export default Experience;