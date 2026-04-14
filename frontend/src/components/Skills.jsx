import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Docker', icon: '/logo/linux.png' },
    { name: 'Postman', icon: '/logo/postman.png' },
    { name: 'VS Code', icon: '/logo/vscode.png' },
    { name: 'Linux', icon: '/logo/linux.png' },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  return (
    <div className="bg-black text-white px-6 py-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Technical Skills</h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto my-4" />
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm">
          The technologies and tools I use to bring ideas to life. My stack is constantly evolving as I explore new ways to create better solutions.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-white text-black font-medium'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Skill Cards */}
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center"
          >
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{
                  scale: 1.06,
                  borderColor: 'rgba(255,255,255,0.2)',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.4)',
                }}
                className="bg-white/[0.02] border border-white/[0.06] p-5 rounded-xl w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center gap-2 transition-colors duration-300 hover:bg-white/[0.05]"
              >
                <img src={skill.icon} alt={skill.name} className="w-9 h-9 object-contain" />
                <h4 className="text-xs font-medium text-gray-300">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
