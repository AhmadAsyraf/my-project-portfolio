import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPhp,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoDocker,
  BiLogoPostgresql,
  BiLogoWordpress,
  BiLogoAndroid,
  BiLogoReact,
  BiLogoDjango
} from "react-icons/bi"
import { SiMysql, SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const techIcons = [
  { icon: <BiLogoTypescript className="text-sky-500" /> },
  { icon: <BiLogoJavascript className="text-orange-500" /> },
  { icon: <SiMysql className="text-yellow-600" /> },
  { icon: <BiLogoPostgresql className="text-sky-300" /> },
  { icon: <BiLogoAndroid className="text-green-600" /> },
  { icon: <BiLogoWordpress className="text-sky-300" /> },
  { icon: <BiLogoTailwindCss className="text-sky-400" /> },
  { icon: <BiLogoNodejs className="text-green-400" /> },
  { icon: <BiLogoPhp className="text-red-500" /> },
  { icon: <BiLogoReact className="text-sky-300" /> },
  { icon: <BiLogoDjango className="text-orange-500" /> },
];

const Tech = () => {
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
        Technologies
      </h1>

      <div className="overflow-hidden w-full">
        <motion.div
          className="inline-flex gap-10 p-5"
          animate={{ x: ["0%", "-10%"] }} // works best with `px` if needed
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear"
            }
          }}
        >
          {/* Duplicate icons for seamless loop */}
          {[...techIcons, ...techIcons].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 cursor-pointer text-[80px] sm:text-[100px] md:text-[120px] transition-transform duration-300 hover:-translate-y-5"
            >
              {item.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Tech;
