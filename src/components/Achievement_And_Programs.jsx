import { motion } from "framer-motion"

// Projects data
const achievementData = [
  {
    title: "Oracle Academy",
    subtitle: "Database Foundations",
    colorClass: "bg-[#D74C30]", // Matches the orange card
    img: "/oracle-academy.png",
    skills: ["SQL Basics", "Normalization", "ERD Design", "Data Integrity"]
  },
  {
    title: "CompTIA Tech+",
    subtitle: "IT Fundamentals",
    colorClass: "bg-white", // Matches the Tech+ badge background
    img: "/comptia-tech-plus-certification.webp",
    skills: ["Hardware", "OS", "Networking", "Cybersecurity", "Cloud"]
  },
  {
    title: "CompTIA Data+",
    subtitle: "Data Analytics",
    colorClass: "bg-white",
    img:"/comptia-data-plus-certification.webp",
    skills: ["Cleaning", "Analysis", "Statistics", "Visualization", "Reporting"]
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

const Achievement_And_Programs = () => {
  return (
    <section id="achievements" className="flex flex-col items-center gap-16 py-16">

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl"
      >
        Achievements & Programs
      </motion.h2>

      {/* Achievement Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {achievementData.map((achievement, index) => (
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
                src={achievement.img}
                alt={achievement.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2 text-center">
              {achievement.title}
            </h3>

            {/* Description */}
            {achievement.description && (
              <p className="text-gray-400 text-center text-sm">
                {achievement.description}
              </p>
            )}

            {/* Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mt-4 justify-center"
            >
              {achievement.skills.map((skill, idx) => (
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
    </section>
  )
}

export default Achievement_And_Programs
