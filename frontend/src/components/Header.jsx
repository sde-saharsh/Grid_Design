import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaFolder,
  FaTools,
  FaUniversity,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChartBar,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { icon: <FaHome size={16} />, label: 'Home', target: 'Home' },
  { icon: <FaUser size={16} />, label: 'About', target: 'AboutMe' },
  { icon: <FaFolder size={16} />, label: 'Projects', target: 'Projects' },
  { icon: <FaTools size={16} />, label: 'Skills', target: 'Tools' },
  { icon: <FaChartBar size={16} />, label: 'Profiles', target: 'CodingProfiles' },
  { icon: <FaUniversity size={16} />, label: 'Education', target: 'Education' },
  { icon: <FaEnvelope size={16} />, label: 'Contact', target: 'Contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy — detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionIds = navLinks.map((l) => l.target);
      let currentSection = 'Home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-4 backdrop-blur-xl text-white flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 shadow-[0_1px_0_rgba(255,255,255,0.06)] py-3'
            : 'bg-transparent py-4'
        }`}
      >
        {/* Left: Name with animated dot */}
        <motion.div
          className="text-xl font-bold tracking-wide"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleScrollTo('Home')}
          style={{ cursor: 'none' }}
        >
          <span className="text-white">Saharsh</span>
          <motion.span
            className="text-purple-400 inline-block"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Center: Desktop Nav Menu with active indicator */}
        <motion.nav
          className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 border border-white/10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {navLinks.map((item, i) => {
            const isActive = activeSection === item.target;
            return (
              <motion.button
                key={item.label}
                onClick={() => handleScrollTo(item.target)}
                className={`relative flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active pill background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              </motion.button>
            );
          })}
        </motion.nav>

        {/* Right: Profile Image (Desktop) */}
        <motion.img
          src="./Profile/Profile.jpeg"
          alt="profile"
          className="w-10 h-10 rounded-full border border-white/20 object-cover shadow-sm hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.15, borderColor: 'rgba(139, 92, 246, 0.5)' }}
        />

        {/* Mobile: Hamburger Button */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-xl p-2"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9, rotate: 90 }}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </motion.header>

      {/* Mobile: Slide-down Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[56px] left-0 w-full z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item, idx) => {
                const isActive = activeSection === item.target;
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => handleScrollTo(item.target)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center gap-3 text-sm font-medium px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer text-left ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="mobileActiveDot"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-400"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
