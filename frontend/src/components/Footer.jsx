import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="bg-black text-white py-20 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="text-gray-500 tracking-[0.2em] uppercase text-xs mb-3">Contact</p>
      <h2 className="text-3xl md:text-5xl font-semibold mb-2">Let's Connect</h2>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto my-6" />

      <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
        I'm always interested in hearing about new opportunities and connecting with fellow developers. Whether you want to discuss a project or just say hello, feel free to reach out!
      </p>

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <a
          href="mailto:saharshkhalokar14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 text-gray-300 hover:bg-white hover:text-black px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm"
        >
          <FaEnvelope /> Send an email
        </a>
        <a
          href="https://www.linkedin.com/in/saharsh-khalokar-a9a8a731a"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 text-gray-300 hover:bg-white hover:text-black px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://x.com/KhalokarSa51567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 text-gray-300 hover:bg-white hover:text-black px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm"
        >
          <FaTwitter /> X (Twitter)
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/[0.06] pt-6">
        <p className="text-xs text-gray-600">
          Designed & Built by <span className="text-gray-400">sde_saharsh</span>
          <br />
          © 2026 — All rights reserved
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
