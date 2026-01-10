import React from 'react';
import { motion } from "framer-motion";
import { HiAcademicCap } from 'react-icons/hi';

/**
 * Education Component
 * * A reusable component for the portfolio's education section.
 * Features Framer Motion entry animations and a responsive, 
 * modern card design with a subtle background glow.
 */
const Education = () => {
  return (
    <section id="education" className="flex flex-col items-center gap-16 py-16 w-full -mx-4 md:-mx-8 lg:-mx-16">
      {/* Section Heading */}
      <div className="flex items-center gap-3 mb-8 px-4 md:px-8 lg:px-16">
        {/*<div className="mx-[50px] text-amber-500 scale-110">
          <HiAcademicCap className="text-2xl" />
        </div>*/}
        <h2 className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            
          Education
        </h2>
      </div>

      {/* Animated Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mx-0 p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors group relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(236,72,153,0.5)] transition-shadow"
      >
        {/* Subtle background glow effect on hover */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/5 blur-[100px] group-hover:bg-amber-500/10 transition-colors rounded-full" />
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                Universiti Teknologi Mara, Cawangan Arau
              </h3>
              <div className="flex items-center gap-2 text-amber-500 font-semibold uppercase tracking-wider text-sm">
                <span>Bachelor Degree in Information Technology</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                <span>Big Data Analytics</span>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <span className="px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400 text-sm font-bold shadow-xl">
                2021 — 2024
              </span>
            </div>
          </div>
          
          <p className="text-slate-400 text-lg leading-relaxed w-full">
          Focuses on big data analytics, database systems, data engineering, and software development, 
          with hands-on experience in designing, developing, and deploying data-driven systems, dashboards, 
          and applications for large-scale data processing and analysis.
          </p>

          {/* Decorative design elements */}
          <div className="mt-8 flex gap-4 opacity-50">
            <div className="w-12 h-1 bg-amber-500/20 rounded-full" />
            <div className="w-6 h-1 bg-amber-500/20 rounded-full" />
          </div>
        </div>
        {/* Subtle background glow effect on hover */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/5 blur-[100px] group-hover:bg-amber-500/10 transition-colors rounded-full" />
      </motion.div>

      {/* Animated Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full mx-0 p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/30 border border-slate-800 hover:border-amber-500/30 transition-colors group relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(236,72,153,0.5)] transition-shadow"
      >
        {/* Subtle background glow effect on hover */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/5 blur-[100px] group-hover:bg-amber-500/10 transition-colors rounded-full" />
        
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                Kolej Professional Mara, Beranang
              </h3>
              <div className="flex items-center gap-2 text-amber-500 font-semibold uppercase tracking-wider text-sm">
                <span>Diploma in Computer Science</span> 
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <span className="px-4 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400 text-sm font-bold shadow-xl">
                2018 — 2020
              </span>
            </div>
          </div>
          
          <p className="text-slate-400 text-lg leading-relaxed w-full">
          Completed a comprehensive diploma program focused on core computing fundamentals, software development, and problem-solving. Gained hands-on experience in programming, database management, and system development. The program emphasized logical thinking, algorithm design, and practical implementation of applications, providing a solid foundation for further studies and real-world IT projects.
          </p>

          {/* Decorative design elements */}
          <div className="mt-8 flex gap-4 opacity-50">
            <div className="w-12 h-1 bg-amber-500/20 rounded-full" />
            <div className="w-6 h-1 bg-amber-500/20 rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;