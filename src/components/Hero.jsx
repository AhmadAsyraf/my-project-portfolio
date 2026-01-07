import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/profile_pic.png"
            alt="Profile"
            className="w-[300px] md:w-[350px] cursor-pointer rounded-full
              shadow-xl shadow-indigo-900 transition-all duration-300
              hover:-translate-y-5 hover:scale-105 hover:shadow-2xl
              hover:shadow-indigo-600"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center text-center gap-3"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Ahmad Asyraf
          </h1>

          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-4xl font-light md:text-6xl">
            Web Developer
          </h3>

          <p className="text-sm md:text-base text-gray-400">
            I'm a web developer skilled in React, Next.js, and Tailwind, focused
            on building clean, scalable applications. From front-end design to
            seamless database integration with PostgreSQL, I create efficient
            solutions for dynamic user experiences. Let's build something great
            together!
          </p>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
