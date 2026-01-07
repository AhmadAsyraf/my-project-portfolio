import { motion } from "framer-motion"

// Projects data
const projectsData = [
  {
    img: "/hrms.jpg",
    title: "Human Resource Management System",
    description:
      "Develop a Human Resource Management System to streamline employee data management, payroll, attendance, and performance tracking for the organization.",
    skills: ["PHP", "JSON", "Bootstrap", "HTML", "SQL"]
  },
  {
    img: "/aichatbot.jpg",
    title: "Internal AI Chatbot Application",
    description:
      "Develop an AI chatbot to help users find information quickly, reducing the time HR staff spend assisting clients and improving overall efficiency.",
    skills: ["Copilot Studio", "JavaScript", "HTML", "CSS"]
  },
  {
    img: "/apps.jpeg",
    title: "Android E-commerce Application",
    description:
      "An Android app for online shopping where users can search products, place orders, make payments, and track their purchases easily.",
    skills: ["Java", "Firebase", "MVVM", "Kotlin"]
  },
  {
    img: "/mental_health.png",
    title: "Mental Health Early Detection Website",
    description:
      "Develop a Mental Health Early Detection website that helps users assess their mental health through interactive questionnaires and AI-driven analysis.",
    skills: ["PHP", "API", "SQL", "Pandas", "PowerBI"]
  },
  {
    img: "/thesis.jpg",
    title:
      "HelpMe: Early Detection of University Students' Mental Health Issues Using a Chatbot-Integrated Dashboard",
    description:
      "HelpMe is a web-based tool for early mental health detection, praised for simplicity and visuals.",
    skills: ["Word", "Mendeley", "Grammarly"]
  }
]

// Skill colors
const skillColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-red-500",
  "bg-teal-500"
]

// Variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08 }
  })
}

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center gap-16 py-16">

      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl"
      >
        My Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-black/50 p-6 rounded-lg max-w-sm flex flex-col items-center shadow-lg hover:shadow-pink-300/100 transition-shadow"
          >
            {/* Image */}
            <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-md mb-4">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2 text-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-center text-sm">
              {project.description}
            </p>

            {/* Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mt-4 justify-center"
            >
              {project.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  custom={idx}
                  variants={skillVariants}
                  className={`${skillColors[idx % skillColors.length]} text-white text-xs font-medium px-3 py-1 rounded-full shadow-md`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
