import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaGithub, FaCode, FaBookOpen, FaChessKnight, FaEnvelope, FaPhone } from "react-icons/fa";

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
      className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-black text-white scroll-mt-20 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full"
      >
        {/* Left: Image */}
        <div className="w-full md:w-[40%] flex justify-center">
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 40px rgba(255, 255, 255, 0.05)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="aspect-square w-full max-w-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
          >
            <img
              src="./Profile/Profile2.jpeg"
              alt="Saharsh Khalokar"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          <span className="bg-white/5 border border-white/10 text-xs px-3 py-1.5 rounded-full w-fit text-gray-400 uppercase tracking-widest">
            About Me
          </span>
          <p className="text-base text-gray-400">Hey, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Saharsh Khalokar
          </h1>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-lg">
            I'm a passionate full-stack developer & competitive programmer pursuing B.Tech in CSE at Walchand College of Engineering, Sangli. I've solved <span className="text-white font-medium">1000+ DSA problems</span> across platforms, built production-level apps with the MERN stack, and love turning complex problems into elegant solutions. Let's build something cool together! 🚀
          </p>

          {/* Social Buttons — unified monochrome style */}
          <div className="flex flex-wrap gap-3 mt-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:text-black transition-colors duration-200"
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
