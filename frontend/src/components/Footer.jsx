import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="bg-black text-white py-16 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="text-gray-400 tracking-widest uppercase mb-2">Contact</p>
      <h2 className="md:text-6xl text-4xl font-semibold mb-2">Let's Connect</h2>

      {/* Divider */}
      <div className="w-[40%] h-[2px] bg-[#a6a6a6] mx-auto my-4"></div>

      <p className="text-gray-400 max-w-4xl mx-auto mb-8 mt-5">
        I'm always interested in hearing about new opportunities and connecting with fellow developers. Whether you want to discuss a project or just say hello, feel free to reach out!
      </p>

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="mailto:saharshkhalokar14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1a1a] hover:bg-white hover:text-black px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
        >
          <FaEnvelope /> Send an email
        </a>
        <a
          href="https://www.linkedin.com/in/saharsh-khalokar-a9a8a731a"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1a1a] hover:bg-white hover:text-black px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://x.com/KhalokarSa51567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1a1a] hover:bg-white hover:text-black px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
        >
          <FaTwitter /> X (Twitter)
        </a>
      </div>

      {/* Footer Bottom */}
      <p className="text-sm text-gray-500">
        Designed & Built by <span className="text-blue-400">sde_saharsh</span>
        <br />
        © 2025 - All rights reserved
      </p>
    </motion.div>
  );
};

export default Footer;
