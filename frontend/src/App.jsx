import React, { useState, useEffect } from 'react';
import { GridBackgroundDemo } from './components/GridBackgroundDemo';
import Header from './components/Header'; 
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Academic from './components/Academic';
import Projects from './components/Projects';
import LoadingScreen from './components/LoadingScreen'; // Make sure this exists

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2-second loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-black'>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <GridBackgroundDemo />
          <AboutMe />
          <Projects />
          <Skills />
          <Academic />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
