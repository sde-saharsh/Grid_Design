import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const skillsData = {
  Languages: [
    { name: 'C', icon: '/logo/c.png' },
    { name: 'C++', icon: '/logo/cpp.png' },
    { name: 'JavaScript', icon: '/logo/javascript.png' },
  ],
  Frontend: [
    { name: 'React.js', icon: '/logo/react.png' },
    { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    { name: 'Bootstrap', icon: '/logo/bootstrap.png' },
  ],
  Backend: [
    { name: 'Node.js', icon: '/logo/node.png' },
    { name: 'Express.js', icon: '/logo/express.png' },
  ],
  Database: [
    { name: 'MongoDB', icon: '/logo/mongodb.png' },
    { name: 'PostgreSQL', icon: '/logo/postgresql.png' },
    { name: 'Redis', icon: '/logo/oracle.png' },
  ],
  'Tools & Platforms': [
    { name: 'Git', icon: '/logo/git.png' },
    { name: 'GitHub', icon: '/logo/github.png' },
    { name: 'Docker', icon: '/logo/docker.png' },
    { name: 'Postman', icon: '/logo/postman.png' },
    { name: 'VS Code', icon: '/logo/vscode.png' },
    { name: 'Linux', icon: '/logo/linux.png' },
  ],
};

// Mouse-follow glow on skill cards container
const SkillsGlow = ({ children }) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative"
    >
      {isHovering && (
        <div
          className="absolute pointer-events-none z-0 w-[300px] h-[300px] rounded-full transition-all duration-200 ease-out"
          style={{
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');
  const { isDark } = useTheme();

  return (
    <div className="px-6 py-20 theme-transition" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Technical{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Skills
          </span>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto my-4" />
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm">
          The technologies and tools I use to bring ideas to life.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(skillsData).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeTab === tab
                  ? 'bg-white text-black font-medium shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Skill Cards with mouse-follow glow */}
      <SkillsGlow>
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center"
            >
              {skillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4, type: "spring" }}
                  whileHover={{
                    scale: 1.12,
                    borderColor: 'rgba(139, 92, 246, 0.4)',
                    boxShadow: '0px 8px 30px rgba(139, 92, 246, 0.15)',
                    y: -5,
                  }}
                  className="bg-white/[0.02] border border-white/[0.06] p-5 rounded-xl w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:bg-white/[0.05] group"
                >
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  />
                  <h4 className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </SkillsGlow>
    </div>
  );
};

export default Skills;
