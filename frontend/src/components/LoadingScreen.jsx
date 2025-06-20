import React, { useEffect, useState } from 'react';

const greetings = [
  'Hello!!',         // English
  'Namaste!!',       // Hindi / Marathi
  'नमस्कार!!',         // Marathi
  'Hola!!',          // Spanish
  'Bonjour!!',       // French
  'Hallo!!',         // German
  'Ciao!!',          // Italian
  'こんにちは!!',       // Japanese
  '안녕하세요!!',       // Korean
  'Olá!!',           // Portuguese
  'Привет!!',        // Russian
  '你好!!',            // Chinese
  'வணக்கம்!!',         // Tamil
  'ਸਤ ਸ੍ਰੀ ਅਕਾਲ!!',     // Punjabi
  'السلام عليكم!!',     // Arabic
  'สวัสดี!!',          // Thai
  'హలో!!',            // Telugu
  'હેલો!!',            // Gujarati
  'ಹಲೋ!!',            // Kannada
  'ഹലോ!!',            // Malayalam
  'Chào bạn!!',       // Vietnamese
  'Salve!!',          // Latin
  'Hej!!',            // Swedish
  'Tere!!',           // Estonian
  'Merhaba!!',        // Turkish
  'Aloha!!',          // Hawaiian
  'Halo!!',           // Indonesian
];

const LoadingScreen = () => {
  const [index, setIndex] = useState(0);

  // Rapid text rotation every 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 100); // faster rotation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <span className="text-sm tracking-widest text-gray-400 mb-2">LOADING</span>
      <h1 className="text-6xl font-extrabold transition-all duration-75 ease-in-out">{greetings[index]}</h1>
      <p className="mt-4 text-sm text-gray-400">
        Please wait while we load the experience for you.
      </p>
    </div>
  );
};

export default LoadingScreen;
