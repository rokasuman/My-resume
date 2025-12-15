
import './App.css'
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Projects/Project'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
     <Navbar />
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Contact />
     <Footer/>
    </>
  )
}

export default App
