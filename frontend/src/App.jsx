import React from 'react'
import { GridBackgroundDemo } from './components/GridBackgroundDemo'
import Header from './components/Header' 
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-black'>

      <Header/>
      <GridBackgroundDemo/>
      <AboutMe/>
      <Skills/>
      <Footer/>
      
    </div>
  )
}

export default App