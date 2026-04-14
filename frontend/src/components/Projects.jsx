import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: 'NexusNav — Graph Routing & Transit Engine',
    role: 'C++ Console Application',
    duration: '2025',
    github: 'https://github.com/sde-saharsh/Smart-Transport-Navigation-System',
    live: '',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accentColor: '#3b82f6',
    points: [
      "Built a console-based transport & navigation system in C++ using OOP principles (Encapsulation, Inheritance, Runtime Polymorphism) across 12 cities and 20 highways.",
      "Implemented Dijkstra's Algorithm (Min-Heap, O((V+E) log V)) and BFS for optimal routing; used a Trie for autocomplete and custom HashMap for O(1) fare retrieval.",
      "Simulated dynamic road blocking with real-time alternate path recalculation and a Stack-based sliding window for route history.",
    ],
    tech: ['C++', 'OOP', "Dijkstra's", 'BFS', 'Min-Heap', 'Trie', 'HashMap', 'Stack'],
  },
  {
    title: 'Distributed Rate Limiter',
    role: 'Backend Microservice',
    duration: '2025',
    github: 'https://github.com/sde-saharsh/Distributed_Rate_Limiter',
    live: '',
    gradient: 'from-red-500/20 to-orange-500/20',
    accentColor: '#ef4444',
    points: [
      'Built a Distributed Rate Limiter API using Node.js and Redis, implementing the Token Bucket algorithm to manage traffic spikes.',
      'Optimized system performance by leveraging Redis TTL (Time-To-Live) for automatic counter resets, reducing database overhead in high-throughput scenarios.',
    ],
    tech: ['Node.js', 'Express.js', 'Redis', 'Token Bucket Algorithm'],
  },
  {
    title: 'Campus Mart — E-commerce Platform',
    role: 'Full Stack MERN Application',
    duration: '2025',
    github: 'https://github.com/sde-saharsh/Campus_Mart',
    live: 'https://campus-mart-three.vercel.app/',
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: '#a855f7',
    points: [
      'Built a full-stack MERN marketplace enabling users to browse, search, and list products with category, price, and location filters.',
      'Implemented real-time buyer-seller chat and notifications using Socket.io for low-latency communication.',
      'Integrated JWT authentication and Role-Based Access Control (RBAC) for secure user/admin access.',
      'Built REST APIs using Express.js and MongoDB Atlas, and integrated Cloudinary for scalable image uploads.',
    ],
    tech: ['React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Docker', 'Cloudinary'],
  },
];

const Projects = () => {
  const { isDark } = useTheme();
  return (
    <section className="py-20 px-4 md:px-10 relative overflow-hidden theme-transition" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Featured{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Projects
          </span>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto my-4" />
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Production-grade projects showcasing my skills in algorithms, system design, and full-stack development.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Animated Vertical Line */}
        <motion.div
          className="absolute left-5 md:left-8 top-0 bottom-0 w-[1px] z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent, #4b5563, transparent)',
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />

        {/* Project Cards */}
        <div className="flex flex-col gap-16 pl-14 md:pl-20 relative z-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Icon with pulse */}
              <div className="absolute -left-14 md:-left-16 top-6">
                <motion.div
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/20 shadow flex items-center justify-center backdrop-blur-sm relative"
                  whileInView={{
                    boxShadow: [`0 0 0 0px ${project.accentColor}30`, `0 0 0 8px ${project.accentColor}00`],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.3 }}
                >
                  <FaBriefcase className="text-xs text-gray-400" />
                </motion.div>
              </div>

              {/* Project Card */}
              <motion.div
                whileHover={{
                  borderColor: `${project.accentColor}30`,
                  y: -4,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-xl w-full hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
              >
                {/* Top gradient accent line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Hover gradient bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${project.accentColor}05, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Title + Links */}
                  <div className="flex items-start justify-between mb-1 gap-4">
                    <h3 className="text-base md:text-lg font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                          title="View Source"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub className="text-base" />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                          title="Live Demo"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{project.role}</p>
                  <p className="text-xs text-gray-600 mb-4">{project.duration}</p>

                  <ul className="space-y-2 mb-5">
                    {project.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.05 }}
                        className="text-sm text-gray-400 flex gap-2"
                      >
                        <span className="mt-1.5 text-[6px]" style={{ color: project.accentColor }}>●</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.03 }}
                        whileHover={{ scale: 1.1, borderColor: `${project.accentColor}40` }}
                        className="bg-white/5 border border-white/10 text-xs px-3 py-1 rounded-full text-gray-400 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
