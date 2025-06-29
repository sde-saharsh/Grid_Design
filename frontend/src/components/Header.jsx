import React from 'react';
import {
  FaHome,
  FaUser,
  FaFolder,
  FaTools,
  FaUniversity,
  FaBriefcase,
  FaEnvelope,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import AboutMe from './AboutMe';
import Skills from './Skills';

// Nav Items List with target IDs
const navLinks = [
  { icon: <FaHome size={18} />, label: 'Home', target: 'Home' },
  { icon: <FaUser size={18} />, label: 'About', target: 'AboutMe' },
  { icon: <FaFolder size={18} />, label: 'Projects', target: 'Projects' },
  { icon: <FaTools size={18} />, label: 'Tools', target: 'Tools' },
  { icon: <FaUniversity size={18} />, label: 'Education', target: 'Education' },
  { icon: <FaEnvelope size={18} />, label: 'Contact', target: 'Contact' },
];

const Header = () => {
  const handleScroll = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 px-30 py-6 bg-black/80 backdrop-blur-md text-white flex items-center justify-center md:justify-between shadow-lg"
    >
      {/* Left: Name */}
      <motion.div
        className="text-2xl font-bold tracking-wide hidden md:block"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Saharsh
      </motion.div>

      {/* Center: Nav Menu */}
      <motion.nav
        className="flex items-center gap-6 px-6 py-4 rounded-full bg-gradient-to-r from-[#121212] to-[#1f1f1f] border border-neutral-700 shadow-inner"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {navLinks.map((item, i) => (
          <motion.button
            key={item.label}
            onClick={() => handleScroll(item.target)}
            className="flex items-center gap-2 text-base font-medium hover:text-gray-300 transition cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </motion.button>
        ))}
      </motion.nav>

      {/* Right: Profile Image */}
      <motion.img
        src="./Profile/Profile.jpeg"
        alt="profile"
        className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm hidden md:block"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />
    </motion.header>

  );
};

export default Header;
