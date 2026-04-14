import { motion, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaCode, FaBookOpen, FaChessKnight, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target);
    if (isNaN(num)) return;

    let start = 0;
    const increment = num / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: '1000', suffix: '+', label: 'DSA Problems Solved' },
  { value: '3', suffix: '+', label: 'Production Projects' },
  { value: '1698', suffix: '', label: 'LeetCode Rating' },
  { value: '8', suffix: '.55', label: 'CGPA' },
];

const socialLinks = [
  {
    href: "mailto:saharshkhalokar14@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
  },
  {
    href: "tel:+918793817909",
    icon: <FaPhone />,
    label: "+91 87938 17909",
  },
  {
    href: "https://www.linkedin.com/in/saharsh-khalokar-a9a8a731a",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/sde-saharsh",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://leetcode.com/u/SAHARSH_14/",
    icon: <FaCode />,
    label: "LeetCode",
  },
  {
    href: "https://www.geeksforgeeks.org/user/sde_saharsh/",
    icon: <FaBookOpen />,
    label: "GFG",
  },
  {
    href: "https://www.codechef.com/users/sde_saharsh",
    icon: <FaChessKnight />,
    label: "CodeChef",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 bg-black text-white scroll-mt-20 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full"
      >
        {/* Left: Image with animated border */}
        <div className="w-full md:w-[40%] flex justify-center">
          <div className="relative group">
            {/* Animated glow ring */}
            <motion.div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb, #667eea)',
                backgroundSize: '400% 400%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="relative aspect-square w-full max-w-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <img
                src="./Profile/Profile2.jpeg"
                alt="Saharsh Khalokar"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 text-xs px-3 py-1.5 rounded-full w-fit text-gray-400 uppercase tracking-widest"
          >
            About Me
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base text-gray-400"
          >
            Hey, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Saharsh{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Khalokar
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base text-gray-400 leading-relaxed max-w-lg"
          >
            I'm a passionate full-stack developer & competitive programmer pursuing B.Tech in CSE at Walchand College of Engineering, Sangli. I've solved <span className="text-white font-medium">1000+ DSA problems</span> across platforms, built production-level apps with the MERN stack, and love turning complex problems into elegant solutions. Let's build something cool together! 🚀
          </motion.p>

          {/* Social Buttons — unified monochrome style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-4"
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:text-black transition-colors duration-200"
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-16 w-full max-w-4xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 text-center hover:bg-white/[0.05] transition-all duration-300"
            >
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
