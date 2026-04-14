import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaHeart, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const contactLinks = [
  {
    href: "mailto:saharshkhalokar14@gmail.com",
    icon: <FaEnvelope />,
    label: "Send an email",
    hoverColor: '#ef4444',
  },
  {
    href: "https://www.linkedin.com/in/saharsh-khalokar-a9a8a731a",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    hoverColor: '#0077b5',
  },
  {
    href: "https://github.com/sde-saharsh",
    icon: <FaGithub />,
    label: "GitHub",
    hoverColor: '#fff',
  },
  {
    href: "https://x.com/KhalokarSa51567",
    icon: <FaTwitter />,
    label: "X (Twitter)",
    hoverColor: '#1da1f2',
  },
];

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <motion.div
      className="py-20 px-6 text-center relative overflow-hidden theme-transition"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-b from-white/[0.01] to-transparent rounded-full blur-[100px]" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 tracking-[0.2em] uppercase text-xs mb-3"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-3xl md:text-5xl font-semibold mb-2"
        >
          Let's{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            Connect
          </span>
        </motion.h2>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto my-6" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed"
        >
          I'm always interested in hearing about new opportunities and connecting with fellow developers. Whether you want to discuss a project or just say hello, feel free to reach out!
        </motion.p>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,1)",
                color: "#000",
                boxShadow: `0 0 20px ${link.hoverColor}30`,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 border border-white/10 text-gray-300 hover:text-black px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm"
            >
              {link.icon} {link.label}
            </motion.a>
          ))}
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/[0.06] pt-6"
        >
          <p className="text-xs text-gray-600 flex items-center justify-center gap-1.5">
            Designed & Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart className="text-red-400 text-xs" />
            </motion.span>{' '}
            by <span className="text-gray-400">sde_saharsh</span>
          </p>
          <p className="text-xs text-gray-700 mt-1">© 2026 — All rights reserved</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
