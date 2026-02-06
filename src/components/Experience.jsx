import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

// Mock data for Experience
const experienceData = [
 
  {
    company: "Carsome Sdn Bhd",
    role: "Junior Software Engineer",
    year: "2025",
    location: "Mutiara Damansara, Selangor",
    description: "Developed skills in Android mobile development using Kotlin Multiplatform for shared business logic. Worked with Firebase services such as authentication, real-time database, and cloud storage. Involved in mobile UI/UX design and implementation following modern mobile design principles.",
    logo: "carsome logo.png"
  },
  {
    company: "Perodua Manufacturing Sdn Bhd",
    role: "Software Developer",
    year: "2024",
    location: "Sungai Choh, Selangor",
    description: "Developed a new Human Resource Management System to enhance internal HR services and operational efficiency. Built an AI-powered chatbot for internal use to assist staff with inquiries related to HR policies, benefits, leave, claims, and other HR matters. Conducted Power BI training sessions for HR staff to improve data reporting capabilities, enabling more interactive, informative, and data-driven HR reports.",
    logo: "/Perodua logo.jpg"
  },
  {
    company: " Hakim Raspberry Tech Solution",
    role: "Technicians",
    year: "2020",
    location: "Semenyih, Selangor",
    description: "Performed troubleshooting and rapid repair of PCs and laptops directly in front of customers, ensuring minimal downtime and high customer satisfaction. Handled sales activities, assembled custom-built computers based on customer requirements, and managed spare parts inventory to ensure sufficient stock availability.",
    logo: "/HRTS.png"
  }
];

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center gap-16 py-20 px-6 max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey and career milestones</p>
        </motion.div>

        {/* Experience List Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex flex-col gap-8 relative"
        >
          {/* Vertical Timeline Line (Visible on MD+) */}
          <div className="hidden md:block absolute left-[47px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-pink-500/50 to-transparent" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="relative flex flex-col md:flex-row items-start gap-6 bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/[0.06] transition-all hover:border-pink-500/30 group"
            >
              {/* Logo / Icon Container */}
              <div className="relative z-10 w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10 shadow-2xl group-hover:border-blue-500/50 transition-colors">
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-pink-500 font-medium bg-pink-500/10 px-3 py-1 rounded-full text-sm">
                    <Calendar size={14} />
                    {exp.year}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Briefcase size={16} className="text-blue-500" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <MapPin size={16} />
                    {exp.location}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-3xl">
                  {exp.description}
                </p>

                {/* Decorative dot for timeline on desktop */}
                <div className="hidden md:block absolute -left-[54px] top-12 w-4 h-4 rounded-full bg-black border-4 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action or footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <a 
            href="/Resume Asyraf Zainudin.pdf"
            download="Resume Asyraf Zainudin.pdf"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            Download Full Resume <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
    </section>
  );
};

export default Experience;