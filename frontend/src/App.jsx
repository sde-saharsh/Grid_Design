import React, { useState, useEffect } from 'react';
import { GridBackgroundDemo } from './components/GridBackgroundDemo';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Academic from './components/Academic';
import Projects from './components/Projects';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white scroll-smooth">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />

          <div id="Home">
            <GridBackgroundDemo />
          </div>

          <div id="AboutMe">
            <AboutMe />
          </div>

          <div id="Projects">
            <Projects />
          </div>

          <div id="Tools">
            <Skills />
          </div>

          <div id="Education">
            <Academic />
          </div>

          <div id="Experience" className="p-20 text-center">
            <p className="text-xl">Experience section coming soon...</p>
          </div>

          <div id="Contact">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
