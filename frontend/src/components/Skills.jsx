import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillsData = {
  Languages: [
    { name: 'C', icon: 'logo/c.png' },
    { name: 'C++', icon: '/logo/cpp.png' },
    { name: 'Java', icon: '/logo/java.png' },
    { name: 'Javascript', icon: '/logo/javascript.png' },
  ],
  Database: [
    { name: 'PostgreSQL', icon: '/logo/postgresql.png' },
    { name: 'MongoDB', icon: '/logo/mongodb.png' },
    { name: 'Oracle', icon: '/logo/oracle.png' },
  ],
  'JS Library/Frameworks': [
    { name: 'React.js', icon: '/logo/react.png' },
    { name: 'Node.js', icon: '/logo/node.png' },
    { name: 'Express.js', icon: '/logo/express.png' },
  ],
  Frameworks: [
    { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    { name: 'Bootstrap', icon: '/logo/bootstrap.png' },
  ],  
  'Tools & Technologies': [
    { name: 'Git', icon: '/logo/git.png' },
    { name: 'GitHub', icon: '/logo/github.png' },
    { name: 'VsCode', icon: '/logo/vscode.png' },
    { name: 'Linux', icon: '/logo/linux.png' },
    { name: 'Postman', icon: '/logo/postman.png' },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  return (
    <div className=" bg-black text-white px-6 py-12">

      <div className="text-center">
        <p className="text-gray-400 uppercase tracking-wider mb-2">Skills</p>
        <h2 className="text-4xl font-semibold mb-4">Technical Skills</h2>
        <div className="w-76 h-[2px] bg-[#a6a6a6] mx-auto my-4"></div>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          The technologies and tools I use to bring ideas to life. My stack is constantly evolving as I explore new ways to create better solutions.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                activeTab === tab ? 'bg-white text-black' : 'bg-[#1a1a1a] text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Cards */}
      <div className="md:w-[40%] m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-15 gap-4 place-items-center">
        {skillsData[activeTab].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.08,
              boxShadow: '0px 8px 24px rgba(255, 255, 255, 0.1)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-[#111] p-4 rounded-xl w-32 h-32 flex flex-col items-center justify-center"
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-auto mb-2" />
            <h4 className="text-sm font-semibold">{skill.name}</h4>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
