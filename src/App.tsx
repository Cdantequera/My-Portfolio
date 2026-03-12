import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import {About} from './components/about/About'
import { Projects } from './components/projects/Projects'
import { Experience } from './components/experience/Experience'
import { Contact } from './components/contact/Contact'

function App() {
  return (
    // El main va a contener todas las secciones de nuestro portfolio
    <main className="bg-slate-500 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

export default App