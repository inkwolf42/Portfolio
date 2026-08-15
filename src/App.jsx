import { useEffect, useState } from 'react'
import About from './sections/About'
import SubAbout from './sections/SubAbout'
import BgFog from './components/BgFog'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { useActiveSection } from './hooks/UseActiveSession'
import ProgressCircle from './components/ProgressCircle'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import "./i18n.js"

export default function App() {
  const sections = ["about", "projects", "contact"];
  const active = useActiveSection(sections); 

  const { t, i18n } = useTranslation();

  const nav = useNavigate()
  const [searchParams] = useSearchParams()
  const lang = searchParams.get("lang") == "ar" ? "ar" : "en"

  useEffect(()=>{
    i18n.changeLanguage(lang);

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  },[lang,i18n])

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


    <button 
      onClick={()=>{
        nav(lang=="ar"?"/?lang=en":"/?lang=ar");
      }}
      className='fixed font-bold top-20 z-50 transition-all bg-black opacity-70 hover:opacity-100 shadow-[0px_0px_5px] shadow-white/80 right-4 backdrop-blur-md aspect-square p-3 rounded-full w-12 h-12 '>
      <p className='m-auto'>
        {lang=="ar"?"EN":"ع"}
      </p>
    </button>

    <div className='fixed top-0 z-50 bg-black/50 backdrop-blur-md w-screen'>
      <div className='relative flex flex-row pt-5 justify-between w-90 font-bold mx-auto pb-6'>
        <a href='#about' className={`w-30 text-center transition-colors ${
          active=="about"?"opacity-100":"opacity-70"
        }`}>{t("about")}</a>
        <a href='#projects' className={`w-30 text-center transition-colors ${
          active=="projects"?"opacity-100":"opacity-70"
        }`}>{t("projects")}</a>
        <a href='#contact' className={`w-30 text-center transition-colors ${
          active=="contact"?"opacity-100":"opacity-70"
        }`}>{t("contact")}</a>
        <div className={`bg-white w-20 translate-x-1/4 h-2 absolute bottom-5 translate-y-full rounded shadow shadow-white transition-all `}
          style={{
            left:`calc(var(--spacing)*${30*(lang=="ar"?2-index:index)})`
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


