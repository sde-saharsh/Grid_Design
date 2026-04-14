import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from 'react-icons/fa';

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

const letterAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.4, ease: "easeOut" },
  }),
};

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black overflow-hidden">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]",
        )}
      />

      {/* Spotlight overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/[0.03] to-transparent rounded-full blur-3xl" />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-4 text-white relative z-10">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-400 mb-6 font-light"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Animated Headline */}
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex justify-center flex-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500"
          >
            {lettersLine1.map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                className="px-[2px] md:px-1"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            className="mt-2 md:mt-4 flex justify-center flex-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500"
          >
            {lettersLine2.map((char, index) => (
              <motion.span
                key={index}
                custom={index + lettersLine1.length}
                variants={letterAnimation}
                className="px-[2px] md:px-1"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
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
      <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent py-6">
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
