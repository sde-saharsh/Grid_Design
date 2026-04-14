import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiJavascript } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

const techStack = [
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <FaDatabase />, label: "PostgreSQL" },
  { icon: <FaCloud />, label: "Cloud" },
  { icon: <FaLaptopCode />, label: "Backend" },
  { icon: <BiCodeAlt />, label: "Full-Stack" },
];

const lettersLine1 = "FULL-STACK".split("");
const lettersLine2 = "DEVELOPER".split("");

const roles = ["Full-Stack Developer", "Competitive Programmer", "MERN Stack Builder", "Problem Solver"];

const letterAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.4, ease: "easeOut" },
  }),
};

// Floating Particles Component
const FloatingParticles = () => {
  const { isDark } = useTheme();
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${isDark ? 'bg-white/[0.08]' : 'bg-black/[0.06]'}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Typewriter Component
const TypewriterText = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWord, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="text-white/60"
      >
        |
      </motion.span>
    </span>
  );
};

// Mouse glow effect
const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    const el = containerRef.current?.parentElement;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-[2]">
      <div
        className="absolute w-[500px] h-[500px] rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export function GridBackgroundDemo() {
  const { isDark } = useTheme();
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden theme-transition" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          isDark
            ? "[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]"
            : "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]",
        )}
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Spotlight overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-[3]" style={{ backgroundColor: 'var(--bg-primary)' }} />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.04] z-[1]"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.03] z-[1]"
        style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-4 relative z-10" style={{ color: 'var(--text-primary)' }}>
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light" style={{ color: 'var(--text-muted)' }}
        >
          Welcome to my portfolio
        </motion.p>

        {/* Animated Headline */}
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className={`flex justify-center flex-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-b from-white via-neutral-200 to-neutral-500' : 'bg-gradient-to-b from-black via-neutral-700 to-neutral-400'}`}
          >
            {lettersLine1.map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                className="px-[2px] md:px-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            className={`mt-2 md:mt-4 flex justify-center flex-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-b from-white via-neutral-200 to-neutral-500' : 'bg-gradient-to-b from-black via-neutral-700 to-neutral-400'}`}
          >
            {lettersLine2.map((char, index) => (
              <motion.span
                key={index}
                custom={index + lettersLine1.length}
                variants={letterAnimation}
                className="px-[2px] md:px-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl font-light"
        >
          I'm a <TypewriterText words={roles} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex items-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: isDark ? "0 0 30px rgba(255,255,255,0.15)" : "0 0 30px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
              isDark ? 'bg-white text-black' : 'bg-black text-white'
            }`}
            onClick={() => {
              const contactSection = document.getElementById('Contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 border rounded-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
              isDark
                ? 'border-white/20 text-white hover:bg-white/5'
                : 'border-black/20 text-black hover:bg-black/5'
            }`}
            onClick={() => {
              const projectsSection = document.getElementById('Projects');
              if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p className="text-xs sm:text-sm text-gray-500 tracking-widest uppercase">
            Scroll to explore
          </p>

          <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent mx-auto my-4" />

          <motion.div
            className="w-10 h-10 mx-auto rounded-full border border-gray-600 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors duration-300"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
              const aboutSection = document.getElementById('AboutMe');
              if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FaArrowDown className="text-gray-400 text-sm" />
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className={`absolute bottom-0 right-0 w-full py-6 z-10 ${isDark ? 'bg-gradient-to-t from-black via-black/80 to-transparent' : 'bg-gradient-to-t from-[#fafafa] via-[#fafafa]/80 to-transparent'}`}>
        {/* Top Row */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...techStack, ...techStack, ...techStack].map((item, i) => (
              <div
                key={`top-${i}`}
                className="flex items-center gap-2 text-gray-500 text-sm px-5 min-w-max"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="marquee-wrapper mt-3">
          <div className="marquee-track reverse">
            {[...techStack, ...techStack, ...techStack].map((item, i) => (
              <div
                key={`bottom-${i}`}
                className="flex items-center gap-2 text-gray-500 text-sm px-5 min-w-max"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
