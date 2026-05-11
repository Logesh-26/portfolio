import Navbar from "./layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar /> 
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App;