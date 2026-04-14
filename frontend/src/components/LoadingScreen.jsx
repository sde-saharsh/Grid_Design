import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  'Hello',
  'Namaste',
  'नमस्कार',
  'Hola',
  'Bonjour',
  'Hallo',
  'Ciao',
  'こんにちは',
  '안녕하세요',
  'Olá',
  'Привет',
  '你好',
  'Merhaba',
  'Aloha',
];

const LoadingScreen = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Slower greeting rotation — 350ms per word
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 350);

    // Smooth progress over ~3.5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 0.5;
      });
    }, 18);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white text-center px-4">
      {/* Animated background rings */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full border border-white/[0.03]"
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full border border-white/[0.05]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />

      {/* Greeting text */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
          transition={{ duration: 0.25 }}
          className="text-5xl md:text-7xl font-bold relative z-10 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text"
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>

      {/* Loading bar */}
      <div className="mt-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative z-10">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress percentage */}
      <motion.p
        className="mt-3 text-xs text-gray-600 font-mono relative z-10"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {Math.min(Math.floor(progress), 100)}%
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
