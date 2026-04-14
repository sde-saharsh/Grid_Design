import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [trails, setTrails] = useState([]);
  const trailId = useRef(0);

  // Separate motion values for inner dot and outer ring
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Inner dot — snappy, fast
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 35, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 35, mass: 0.2 });

  // Outer ring — smooth, trailing
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.8 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.8 });

  const spawnTrail = useCallback((x, y) => {
    const id = trailId.current++;
    setTrails((prev) => [...prev.slice(-5), { id, x, y }]);
    setTimeout(() => {
      setTrails((prev) => prev.filter((t) => t.id !== id));
    }, 600);
  }, []);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const checkHover = (e) => {
      const isInteractive = e.target.closest('button, a, input, textarea, select, [role="button"], .magnetic');
      setHovered(!!isInteractive);
    };

    const clickDown = (e) => {
      setClicked(true);
      spawnTrail(e.clientX, e.clientY);
    };
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
  }, [visible, mouseX, mouseY, spawnTrail]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  const ringSize = hovered ? 50 : 32;
  const dotSize = hovered ? 0 : 5;

  return (
    <>
      {/* Click sparkle trails */}
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{ x: trail.x - 4, y: trail.y - 4, scale: 1, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Outer ring — trails behind */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: -ringSize / 2,
          translateY: -ringSize / 2,
          borderRadius: '9999px',
          border: `1.5px solid ${hovered ? 'rgba(139, 92, 246, 0.6)' : 'rgba(255, 255, 255, 0.5)'}`,
          backgroundColor: hovered ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
          backdropFilter: hovered ? 'blur(2px)' : 'none',
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.8 : 1,
          transition: 'width 0.3s, height 0.3s, border 0.3s, background-color 0.3s, scale 0.15s',
        }}
      />

      {/* Inner dot — snaps to cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          x: dotX,
          y: dotY,
          width: dotSize,
          height: dotSize,
          translateX: -dotSize / 2,
          translateY: -dotSize / 2,
          borderRadius: '9999px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          opacity: visible ? 1 : 0,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
    </>
  );
};

export default CustomCursor;
