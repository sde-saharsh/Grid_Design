import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { ScrollProgress, BackToTop } from './components/ScrollWidgets';

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
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <CustomCursor />
            <ScrollProgress />
            <BackToTop />
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
