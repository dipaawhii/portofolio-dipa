import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDarkMode } from "./hooks/useTheme"
import { useReveal } from "./hooks/useReveal"
import { useTilt } from "./hooks/useTilt"
import NavMobile from './components/navbar/NavMobile'
import Hero from './components/Hero'
import GlobalBackground from './ui/GlobalBackground'
import Projects from './components/project/Projects'
import Gallery from './components/gallery/Gallery'
import Certificates from './components/certificates/Certificates'
import Contact from './components/Contact'
import About from './components/about/About'
import Journey from './components/education/Journey'
import Navbar from './components/navbar/Navbar'
import Skills from "./components/skills/Skills";
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)
  const { isDark, toggle } = useDarkMode();
  const [openNavMobile, setOpenNavMobile] = useState(false)
  useReveal();
  useTilt();

  function navMobileToggle() {
    setOpenNavMobile(!openNavMobile)
  }

  return (
    <>
      <GlobalBackground />
      <Navbar isDark={isDark} toggle={toggle} openNavMobile={openNavMobile} navMobileToggle={navMobileToggle} />
      <NavMobile openNavMobile={openNavMobile} />
      <Hero />
      <About/>
      <Journey/>
      <Skills/>
      <Projects/>
      
      <Certificates/>
      <Gallery/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
