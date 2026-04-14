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
  'வணக்கம்',
  'مرحبا',
  'สวัสดี',
  'Merhaba',
  'Aloha',
];

const LoadingScreen = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white text-center px-4">
      {/* Subtle background glow */}
      <div className="absolute w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[100px]" />

      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="text-5xl md:text-6xl font-bold relative z-10"
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>

      {/* Loading bar */}
      <div className="mt-8 w-40 h-[2px] bg-white/10 rounded-full overflow-hidden relative z-10">
        <motion.div
          className="h-full bg-white/40"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
