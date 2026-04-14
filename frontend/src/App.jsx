import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/SmoothScroll';
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
    // Slightly longer loading to let the greetings play out nicely
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] scroll-smooth relative overflow-x-hidden theme-transition">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
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
              <SmoothScroll>
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
              </SmoothScroll>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
