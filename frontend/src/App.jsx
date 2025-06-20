import React from 'react'
import { GridBackgroundDemo } from './components/GridBackgroundDemo'
import Header from './components/Header' 
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Academic from './components/Academic'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='bg-black'>

      <Header/>
      <GridBackgroundDemo/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Academic/>
      <Footer/>
      
    </div>
  )
}

export default App