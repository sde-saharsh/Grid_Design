import React, { useState, useCallback } from 'react';
import { FaUniversity } from 'react-icons/fa';
import { cn } from "@/lib/utils";

// Throttle function
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
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
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
          "[background-image:linear-gradient(to_right,#2f2f2f_1px,transparent_1px),linear-gradient(to_bottom,#2f2f2f_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Title Section */}
        <div className="mb-12">
          <p className="text-gray-400 uppercase tracking-widest mb-2">Education</p>
          <h2 className="text-4xl md:text-6xl font-semibold">Academic Background</h2>
          <div className="w-76 h-[2px] bg-[#a6a6a6] mx-auto my-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            The knowledge and experiences that shaped my technical journey. My education provided the foundation for problem-solving and innovation.
          </p>
        </div>

        {/* Tilt Card */}
        <div
          className="transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform mx-auto"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          <div className="bg-[#111] rounded-xl border border-gray-800 p-6 md:p-8 max-w-xl w-[90vw] shadow-lg mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <FaUniversity className="text-yellow-400 text-4xl mt-1" />
              <div className="text-left">
                <h3 className="text-lg md:text-xl font-bold">B. Tech in Computer Science and Engineering</h3>
                <p className="text-sm text-gray-400">Walchand College of Engineering, Sangli</p>
                <p className="text-sm text-gray-500">CGPA - 8.69/10</p>
                <p className="text-sm text-gray-500">Jul 2024 - Jun 2027</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 pl-1 mt-2 text-left">
              <li>Aced training and coding tracks</li>
              <li>Developed School Management System Software which saved 40 man-hours per month.</li>
              <li>Developed Tourism android app which led to inception of a new startup</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
