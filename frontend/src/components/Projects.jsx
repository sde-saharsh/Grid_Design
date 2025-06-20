import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const projects = [
  {
    company: 'IPO Web App & REST API for Mobile App Integration',
    role: '',
    duration: 'Jun 2025 - Present',
    points: [
      'Built a production-level IPO analytics web application using React.js for frontend and Node.js/Express for backend.',
      'Designed and deployed RESTful APIs to deliver IPO data to the Bluestock mobile app and partner platforms.',
      'Managed dynamic data using PostgreSQL, ensuring scalable backend integration with seamless data access.',
      'Contributed to full-stack web development and collaborated in Agile sprints using GitHub for version control.',
      'Played a key role in real-time API integration for a platform used by over 5 lakh users in the fintech space.',
    ],
    tech: ['ReactJS', 'NodeJS', 'Tailwind CSS', 'ExpressJS', 'JWT','PostgreSql','GitHub','Framer Motion'],
  },
  {
    company: 'Portfolio Website',
    role: '',
    duration: 'Jun 2025 ',
    points: [
      'Developed an interactive personal portfolio using React and Tailwind CSS.',
      'Integrated smooth animations with Framer Motion to enhance UX.',
      'Designed a responsive layout compatible across all screen sizes.',
      'Deployed using Vercel Pages with real-time updates via GitHub integration.',
    ],
    tech: ['ReactJS', 'Framer Motion', 'Tailwind CSS', 'GitHub', 'Vercel'],
  },
  {
    company: 'Food Recipe App',
    role: 'Full Stack Web Application',
    duration: 'Aug 2024 - Oct 2024',
    points: [
      'Designed and developed a full-stack food recipe app with secure login and authentication.',
      'Implemented CRUD functionality to add, edit, and delete personal recipes.',
      'Used responsive design principles to ensure usability across all devices.',
      'Integrated LocalStorage to preserve session-specific UI states and favorites.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },  
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gray-400 uppercase tracking-widest">Projects</p>
        <h2 className="text-4xl font-semibold mb-4">Featured Projects</h2>
        <div className="w-76 h-[2px] bg-[#a6a6a6] mx-auto my-4"></div>
        <p className="text-gray-400 max-w-xl mx-auto">
          Timeline of key personal projects highlighting my skills and creativity.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-5 md:left-10 top-0 bottom-0 w-[2px] bg-gray-600 z-0"></div>

        {/* Project Cards */}
        <div className="flex flex-col gap-20 pl-16 md:pl-24 relative z-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Briefcase Icon beside the timeline */}
              <div className="absolute -left-16 md:-left-19 top-6">
                <div className="w-10 h-10 rounded-full bg-white text-black border-2 border-gray-300 shadow flex items-center justify-center">
                  <FaBriefcase className="text-md" />
                </div>
              </div>

              {/* Project Card */}
              <div className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl shadow-lg w-full">
                <h3 className="text-lg md:text-xl font-semibold">{project.company}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.role}</p>

                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-500 text-sm">{project.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
