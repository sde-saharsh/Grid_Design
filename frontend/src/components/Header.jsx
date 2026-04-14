import React, { useState } from 'react';
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

// Nav Items List with target IDs
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

  const handleScroll = (target) => {
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
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20 py-4 bg-black/70 backdrop-blur-xl text-white flex items-center justify-between shadow-[0_1px_0_rgba(255,255,255,0.06)]"
      >
        {/* Left: Name */}
        <motion.div
          className="text-xl font-bold tracking-wide"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-white">Saharsh</span>
          <span className="text-gray-500">.</span>
        </motion.div>

        {/* Center: Desktop Nav Menu */}
        <motion.nav
          className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {navLinks.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => handleScroll(item.target)}
              className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.button>
          ))}
        </motion.nav>

        {/* Right: Profile Image (Desktop) */}
        <motion.img
          src="./Profile/Profile.jpeg"
          alt="profile"
          className="w-10 h-10 rounded-full border border-white/20 object-cover shadow-sm hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

        {/* Mobile: Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-xl p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.header>

      {/* Mobile: Slide-down Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 w-full z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.target)}
                  className="flex items-center gap-3 text-sm font-medium px-4 py-3 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-200 cursor-pointer text-left"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
