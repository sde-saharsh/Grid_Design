import React, { useState, useEffect } from 'react';
import { GridBackgroundDemo } from './components/GridBackgroundDemo';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Academic from './components/Academic';
import Projects from './components/Projects';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white scroll-smooth relative overflow-x-hidden">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* 🖱️ Custom Cursor */}
          <CustomCursor />

          {/* 🧭 Header (make nav links interactive) */}
          <div className="cursor-hover-target">
            <Header />
          </div>

          {/* 🎯 Sections */}
          <section id="Home">
            <GridBackgroundDemo />
          </section>

          <section id="AboutMe" className="cursor-hover-target">
            <AboutMe />
          </section>

          <section id="Projects" className="cursor-hover-target">
            <Projects />
          </section>

          <section id="Tools" className="cursor-hover-target">
            <Skills />
          </section>

          <section id="Education" className="cursor-hover-target">
            <Academic />
          </section>

          <section id="Contact" className="cursor-hover-target">
            <Footer />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
