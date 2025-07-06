import { motion } from "framer-motion";

const experiences = [
  {
    company: "OPTUM",
    role:"Software Engineer",
    duration: "Apr 2025 – Present",
    location: "Hyderabad, Telangana",
    responsibilities: [
      "Developed and maintained RESTful APIs using Spring Boot, enabling seamless integration between microservices and front-end applications",
      "Collaborated in an Agile environment to deliver high-quality backend features aligned with business requirements.",
      "Applied best practices in code quality, including unit testing, integration testing, and code reviews.",
      "Participated in DevOps activities, such as configuring CI/CD pipelines, automating deployments, and monitoring application performance using tools like GitHub Actions and Docker."
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
    <section id="experience" className="py-12 bg-gray-900 text-white">
  <motion.div
    className="container mx-auto px-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 text-center">Experience</h2>
    <div className="mt-8 flex flex-col gap-6">
  {experiences.map((exp, index) => (
    <motion.div
      key={index}
      className="bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-blue-300">{exp.role}</h3>
      <p className="text-gray-400 text-sm sm:text-base mt-1">
        {exp.company} | {exp.duration} | {exp.location}
      </p>
      <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300 text-sm sm:text-base">
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

export default Experience;
