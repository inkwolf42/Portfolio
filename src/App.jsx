import { useState } from 'react'
import About from './sections/About'
import SubAbout from './sections/SubAbout'
import BgFog from './components/BgFog'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { useActiveSection } from './hooks/UseActiveSession'
import ProgressCircle from './components/ProgressCircle'
import { useScrollProgress } from './components/useScrollProgress'

export default function App() {
  const sections = ["about", "projects", "contact"];
  const active = useActiveSection(sections); 

  const scrollProgress = useScrollProgress()

  const index = sections.indexOf(active)

  return <div className='flex flex-col justify-center items-center lg:w-2/3 sm:w-3/4 w-4/5 relative  '>

    <BgFog/>
    <BgFog/>
    <BgFog/>
    <BgFog/>
    <BgFog/>
    <BgFog/>
    <BgFog/>
    <BgFog/>

    <div className='fixed top-0 z-50 bg-black/50 backdrop-blur-md w-screen'>
      <div className='relative flex flex-row pt-5 justify-between w-90 font-bold mx-auto pb-6'>
        <a href='#about' className={`w-30 text-center transition-colors ${
          active=="about"?"opacity-100":"opacity-70"
        }`}>About</a>
        <a href='#projects' className={`w-30 text-center transition-colors ${
          active=="projects"?"opacity-100":"opacity-70"
        }`}>Projects</a>
        <a href='#contact' className={`w-30 text-center transition-colors ${
          active=="contact"?"opacity-100":"opacity-70"
        }`}>Contact</a>
        <div className={`bg-white w-20 translate-x-1/4 h-2 absolute bottom-5 translate-y-full rounded shadow shadow-white transition-all `}
          style={{
            left:`calc(var(--spacing)*${30*index})`
          }}
        />
      </div>
    </div>
    <div className='flex flex-col justify-center w-full '>
      <About/>
      <SubAbout/>
      <Projects/>
      <Contact/>
    </div>
    <footer className='py-5 w-full flex flex-row justify-between brightness-50 text-xs sm:text-sm font-mono'>
      <span>© 2026 Benyoucef Mahmoud</span>
      <span>Hithab.Setif</span>
    </footer>
    <div className='fixed bottom-0 right-0 '>
        <ProgressCircle value={scrollProgress}/>
    </div>
  </div>
}


