import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Tech from "./components/Tech"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 h-screen w-screen
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
