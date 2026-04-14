import React, { useState, useCallback, useRef } from 'react';
import { FaUniversity } from 'react-icons/fa';
import { cn } from "@/lib/utils";
import { motion, useInView } from 'framer-motion';

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func(...args);
  };
}

// Animated counter
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(target);
    if (isNaN(num)) return;
    let start = 0;
    const increment = num / 90;
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 100) / 100);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Academic = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 14;
      const rotateY = (centerX - x) / 14;
      setRotate({ x: rotateX, y: rotateY });
      setGlare({ x: (x / box.width) * 100, y: (y / box.height) * 100 });
    }, 50),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50 });
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
          <h2 className="text-3xl md:text-5xl font-semibold">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Background
            </span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto my-4" />
        </motion.div>

        {/* 3D Tilt Card */}
        <div
          className="transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform mx-auto"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8 max-w-xl w-[90vw] mx-auto hover:bg-white/[0.04] transition-colors duration-300 overflow-hidden group">
            {/* Glare effect on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-1"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <FaUniversity className="text-amber-400 text-xl" />
                </motion.div>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-semibold">B. Tech in Computer Science and Engineering</h3>
                  <p className="text-sm text-gray-400 mt-0.5">Walchand College of Engineering, Sangli</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                      CGPA — <Counter target={8.55} suffix="/10" />
                    </span>
                    <span className="text-xs text-gray-600">•</span>
                    <span className="text-xs text-gray-500">2023 – 2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
