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
import { SiMongodb, SiFrontendmentor } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

const techStack = [
  { icon: <FaCloud />, label: "Cloud" },
  { icon: <SiFrontendmentor />, label: "Frontend" },
  { icon: <BiCodeAlt />, label: "Full-Stack" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaDatabase />, label: "Database" },
  { icon: <FaLaptopCode />, label: "Backend" },
  { icon: <FaCloud />, label: "Cloud" },
  { icon: <SiFrontendmentor />, label: "Frontend" },
  { icon: <BiCodeAlt />, label: "Full-Stack" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaDatabase />, label: "Database" },
  { icon: <FaLaptopCode />, label: "Backend" },
  { icon: <FaCloud />, label: "Cloud" },
  { icon: <SiFrontendmentor />, label: "Frontend" },
  { icon: <BiCodeAlt />, label: "Full-Stack" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaDatabase />, label: "Database" },
  { icon: <FaLaptopCode />, label: "Backend" },
  { icon: <FaCloud />, label: "Cloud" },
  { icon: <SiFrontendmentor />, label: "Frontend" },
  { icon: <BiCodeAlt />, label: "Full-Stack" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaDatabase />, label: "Database" },
  { icon: <FaLaptopCode />, label: "Backend" },
];

const lettersLine1 = "FULL-STACK".split("");
const lettersLine2 = "DEVELOPER".split("");

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",

        )}
      />

      {/* Spotlight overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-4 text-white relative z-10">
        {/* Animated Headline */}
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex justify-center flex-wrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500"
          >
            {lettersLine1.map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                className="px-1"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            className="mt-4 flex justify-center flex-wrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500"
          >
            {lettersLine2.map((char, index) => (
              <motion.span
                key={index}
                custom={index + lettersLine1.length}
                variants={letterAnimation}
                className="px-1"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="text-center mt-10">
          <p className="text-sm sm:text-base text-white">
            Scroll down for more information...
          </p>

          <div className="md:w-100 h-[1px] bg-[#a6a6a6] mx-auto my-4" />

          <div className="w-15 h-15 sm:w-12 sm:h-12 mx-auto rounded-full bg-gray-500 flex items-center justify-center animate-bounce cursor-pointer mt-8">
            <FaArrowDown className="text-black text-lg" />
          </div>


        </div>

      </div>

      <div className="absolute bottom-0 right-0 w-full bg-black py-4 mt-12">
            {/* Top Row: Scroll Left */}
            <div className="marquee-wrapper">
              <div className="marquee-track">
                {[...techStack, ...techStack].map((item, i) => (
                  <div
                    key={`top-${i}`}
                    className="flex items-center gap-2 text-white text-base sm:text-lg px-4 min-w-max"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Scroll Right */}
            <div className="marquee-wrapper mt-4">
              <div className="marquee-track reverse">
                {[...techStack, ...techStack].map((item, i) => (
                  <div
                    key={`bottom-${i}`}
                    className="flex items-center gap-2 text-white text-base sm:text-lg px-4 min-w-max"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </div>
  );
}
