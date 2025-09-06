import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "Fashion Fit Prediction",
    duration: "Feb 2023 – Jun 2023",
    technologies: "Machine Learning, Deep Learning, Python",
    description: [
      "Conducted data pre-processing and divided the dataset into training and testing subsets.",
      "Utilized a range of algorithms including Decision Trees, Support Vector Machines, Logistic Regression, and Deep Learning techniques employing TensorFlow Hub for image classification."
    ],
    link: "https://drive.google.com/file/d/1uMnL2Lnpo9JZK7um1seRZg0c4o0yj0jQ/view?usp=sharing"
  },
  {
    name: "Applying Deep Learning Architectures for MIME Art Evaluation",
    duration: "Mar 2022 – May 2022",
    technologies: "Machine Learning, Deep Learning, Python",
    description: [
      "Utilized algorithms such as DeepFace, FER Model, and CNN Models to detect emotions in individual subjects, groups of people, and videos using MIME images.",
      "Employed algorithms like StyleGAN2 from NVIDIA to generate GANs for crafting MIME faces.",
      "Leveraged Spark AR Tool to generate MIME makeup on a human face when provided as input."
    ],
    link: "https://drive.google.com/file/d/1i_AVaIxWZo8LKUPBYVFNgxLGUHT5oI0Q/view?usp=sharing"
  },{
    name:"Status Check",
    duration : "Oct 2022 – Jan 2022",
    technologies:"Java, Android Studio, Firebase",
    description:[
      "Created a mobile application designed to facilitate communication between faculty members and students.",
      "Within this app, students can accessfaculty profiles, cabin locations, and check the real-time availability status of specific faculty members, while faculty members can update their availability status."
    ],
    link:"https://github.com/VijayManoj/Status-Check"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader title="Projects" subtitle="Selected work and experiments" />
        <div className="mt-8 grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-brand-300">{project.name}</h3>
              <p className="text-gray-400 text-sm md:text-base mt-1">
                {project.duration} | <span className="italic">{project.technologies}</span>
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-gray-200 text-sm md:text-base">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-brand-400 hover:text-white transition-colors text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
