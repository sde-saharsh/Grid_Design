import React, { useState, useCallback } from 'react';
import { FaUniversity } from 'react-icons/fa';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

const Academic = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 12;
      const rotateY = (centerX - x) / 12;
      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">
      
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:80px_80px]",
          "[background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]",
        )}
      />

      {/* Spotlight effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-3">Education</p>
          <h2 className="text-3xl md:text-5xl font-semibold">Academic Background</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto my-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            The knowledge and experiences that shaped my technical journey.
          </p>
        </motion.div>

        {/* Tilt Card */}
        <div
          className="transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform mx-auto"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8 max-w-xl w-[90vw] mx-auto hover:bg-white/[0.04] transition-colors duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <FaUniversity className="text-amber-400 text-lg" />
              </div>
              <div className="text-left">
                <h3 className="text-base md:text-lg font-semibold">B. Tech in Computer Science and Engineering</h3>
                <p className="text-sm text-gray-400 mt-0.5">Walchand College of Engineering, Sangli</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-gray-500">CGPA — 8.55/10</span>
                  <span className="text-xs text-gray-600">•</span>
                  <span className="text-xs text-gray-500">2023 – 2027</span>
                </div>
              </div>
            </div>
            <ul className="space-y-2 pl-1 mt-3 text-left">
              <li className="text-sm text-gray-400 flex gap-2">
                <span className="text-gray-600 mt-1.5 text-[6px]">●</span>
                <span>Aced training and coding tracks</span>
              </li>
              <li className="text-sm text-gray-400 flex gap-2">
                <span className="text-gray-600 mt-1.5 text-[6px]">●</span>
                <span>Developed School Management System Software which saved 40 man-hours per month.</span>
              </li>
              <li className="text-sm text-gray-400 flex gap-2">
                <span className="text-gray-600 mt-1.5 text-[6px]">●</span>
                <span>Developed Tourism android app which led to inception of a new startup.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
