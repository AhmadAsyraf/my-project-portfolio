import { motion } from "framer-motion"
import { HiOutlineMail } from "react-icons/hi"

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 px-4 md:px-16"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-5xl md:text-7xl"
      >
        <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent font-light">
          Get in Touch
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-center text-lg font-semibold text-white max-w-xl"
      >
        Want to work together? Reach out! Send me an email through the button
        below, and I’ll respond as soon as I can.
      </motion.p>

      {/* Contact Button */}
      <motion.a
        href="mailto:official.asraf789@gmail.com"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover="hover"
        className="group flex items-center gap-3 rounded-lg border border-indigo-600 bg-black px-6 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all hover:shadow-xl hover:shadow-indigo-600"
      >
        {/* Animated Email Icon */}
        <motion.span
          variants={{
            hover: { x: 6, rotate: 12 },
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <HiOutlineMail className="text-2xl text-indigo-400" />
        </motion.span>

        <span>Contact Me</span>
      </motion.a>
    </div>
  )
}

export default Contact
