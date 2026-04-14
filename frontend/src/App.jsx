import React, { useState, useEffect } from 'react';
import { GridBackgroundDemo } from './components/GridBackgroundDemo';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Academic from './components/Academic';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white scroll-smooth relative overflow-x-hidden">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <CustomCursor />
          <Header />

          <section id="Home">
            <GridBackgroundDemo />
          </section>

          <section id="AboutMe">
            <AboutMe />
          </section>

          <section id="Projects">
            <Projects />
          </section>

          <section id="Tools">
            <Skills />
          </section>

          <section id="CodingProfiles">
            <CodingProfiles />
          </section>

          <section id="Education">
            <Academic />
          </section>

          <section id="Contact">
            <Footer />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
