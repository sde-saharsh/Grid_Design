import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const checkHover = (e) => {
      const isInteractive = e.target.closest('button, a, input, textarea, select, [role="button"]');
      setHovered(!!isInteractive);
    };

    const clickDown = () => setClicked(true);
    const clickUp = () => setClicked(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mousedown', clickDown);
    window.addEventListener('mouseup', clickUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mousedown', clickDown);
      window.removeEventListener('mouseup', clickUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [visible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  const size = hovered ? 40 : 12;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: position.x - size / 2,
        y: position.y - size / 2,
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        scale: clicked ? 0.85 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        borderRadius: '9999px',
        border: '2px solid rgba(255, 255, 255, 0.8)',
        backgroundColor: hovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        backdropFilter: hovered ? 'blur(2px)' : 'none',
      }}
    />
  );
};

export default CustomCursor;
