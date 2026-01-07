import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"
import { BsGithub, BsLinkedin, BsYoutube, BsTwitter } from "react-icons/bs"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between 
      border-b border-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">

      {/* Logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text
        text-3xl font-semibold text-transparent opacity-100 hover:opacity-100" /*text-transparent opacity-80 hover:opacity-100 */
      >
        PortFolio
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <li><a className="opacity-70 hover:text-blue-400 hover:opacity-100" href="#home">Home</a></li>
        <li><a className="opacity-70 hover:text-pink-400 hover:opacity-100" href="#tech">Tech</a></li>
        <li><a className="opacity-70 hover:text-purple-400 hover:opacity-100" href="#projects">Projects</a></li>
        <li><a className="opacity-70 hover:text-green-400 hover:opacity-100" href="#contact">Contact</a></li>
      </ul>

      {/* Desktop Socials */}
      <ul className="hidden md:flex gap-5">
        <li className="text-xl opacity-70 hover:text-red-500 hover:opacity-100"><BsYoutube /></li>
        <li className="text-xl opacity-70 hover:text-blue-500 hover:opacity-100" onClick={() => setIsOpen(false)}><a href="https://www.linkedin.com/in/ahmad-asyraf-z" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a></li>
        <li className="text-xl opacity-70 hover:text-sky-400 hover:opacity-100"><BsTwitter /></li>
        <li className="text-xl opacity-70 hover:text-orange-400 hover:opacity-100"onClick={() => setIsOpen(false)}><a href="https://github.com/AhmadAsyraf" target="_blank" rel="noopener noreferrer"><BsGithub /></a></li>
      </ul>

      {/* Mobile Icon */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl cursor-pointer" onClick={() => setIsOpen(false)} />
      ) : (
        <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={() => setIsOpen(true)} />
      )}

      {/* Mobile Menu (Animated) */}
      <div
        className={`fixed right-0 top-[84px] h-screen w-1/2 bg-black/90 p-12 
        transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-8">
          <li><a className="hover:text-blue-400" onClick={() => setIsOpen(false)} href="#home">Home</a></li>
          <li><a className="hover:text-pink-400" onClick={() => setIsOpen(false)} href="#tech">Tech</a></li>
          <li><a className="hover:text-purple-400" onClick={() => setIsOpen(false)} href="#projects">Projects</a></li>
          <li><a className="hover:text-green-400" onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>
        </ul>

        <ul className="mt-10 flex gap-5">
         <li className="text-xl opacity-70 hover:text-red-500 hover:opacity-100"><BsYoutube /></li>
        <li className="text-xl opacity-70 hover:text-blue-500 hover:opacity-100"><BsLinkedin /></li>
        <li className="text-xl opacity-70 hover:text-sky-400 hover:opacity-100"><BsTwitter /></li>
        <li className="text-xl opacity-70 hover:text-orange-400 hover:opacity-100"><BsGithub /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
