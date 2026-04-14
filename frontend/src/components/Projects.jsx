import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'NexusNav — Graph Routing & Transit Engine',
    role: 'C++ Console Application',
    duration: '2025',
    github: 'https://github.com/sde-saharsh/Smart-Transport-Navigation-System',
    live: '',
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
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10 relative overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Projects</h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto my-4" />
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Production-grade projects showcasing my skills in algorithms, system design, and full-stack development.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-5 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent z-0" />

        {/* Project Cards */}
        <div className="flex flex-col gap-16 pl-14 md:pl-20 relative z-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Icon */}
              <div className="absolute -left-14 md:-left-16 top-6">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/20 shadow flex items-center justify-center backdrop-blur-sm">
                  <FaBriefcase className="text-xs text-gray-400" />
                </div>
              </div>

              {/* Project Card */}
              <motion.div
                whileHover={{
                  borderColor: "rgba(255,255,255,0.15)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-xl w-full hover:bg-white/[0.04] transition-colors duration-300"
              >
                {/* Title + Links */}
                <div className="flex items-start justify-between mb-1 gap-4">
                  <h3 className="text-base md:text-lg font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        title="View Source"
                      >
                        <FaGithub className="text-base" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-1">{project.role}</p>
                <p className="text-xs text-gray-600 mb-4">{project.duration}</p>

                <ul className="space-y-2 mb-5">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-sm text-gray-400 flex gap-2">
                      <span className="text-gray-600 mt-1.5 text-[6px]">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/5 border border-white/10 text-xs px-3 py-1 rounded-full text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
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
