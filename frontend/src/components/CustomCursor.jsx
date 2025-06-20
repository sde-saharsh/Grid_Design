import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkHover = (e) => {
      const isInteractive = e.target.closest('.cursor-hover-target, button, a, input, textarea, select');
      setHovered(!!isInteractive);
    };

    const clickDown = () => setClicked(true);
    const clickUp = () => setClicked(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mousedown', clickDown);
    window.addEventListener('mouseup', clickUp);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mousedown', clickDown);
      window.removeEventListener('mouseup', clickUp);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: position.x - (hovered ? 20 : 8),
        y: position.y - (hovered ? 20 : 8),
        scale: clicked ? 0.9 : hovered ? 2.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        width: '16px',
        height: '16px',
        borderRadius: '9999px',
        backgroundColor: 'white',
        boxShadow: hovered
          ? '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4)'
          : '0 0 8px rgba(255, 255, 255, 0.4)',
      }}
    />
  );
};

export default CustomCursor;
