import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with Laravel and Vue.js',
      longDescription: 'A complete e-commerce platform featuring user authentication, product management, shopping cart, payment integration, and order tracking. Built with Laravel for backend API and Vue.js for dynamic frontend.',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'Stripe'],
      liveDemo: '#',
      github: '#',
      color: 'from-dark-plum to-dusty-mauve',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task manager with team collaboration',
      longDescription: 'A powerful task management application that allows teams to collaborate in real-time. Features include task assignment, deadline tracking, file attachments, and real-time notifications.',
      technologies: ['Vue.js', 'Laravel', 'WebSocket', 'Tailwind CSS', 'MySQL'],
      liveDemo: '#',
      github: '#',
      color: 'from-dusty-mauve to-soft-pink',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern interactive portfolio with advanced animations',
      longDescription: 'A stunning portfolio website featuring glassmorphism design, smooth animations, and responsive layout. Built with React, Framer Motion, and Tailwind CSS.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      liveDemo: '#',
      github: '#',
      color: 'from-soft-pink to-dark-plum',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      longDescription: 'A comprehensive dashboard that aggregates social media metrics, provides analytics, and helps manage multiple platforms from one interface.',
      technologies: ['Vue.js', 'Chart.js', 'REST APIs', 'Tailwind CSS'],
      liveDemo: '#',
      github: '#',
      color: 'from-dark-plum to-soft-pink',
    },
  ];
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-cream-white to-soft-pink/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-plum to-soft-pink mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Here are some of my recent works that showcase my skills and creativity
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <div className="text-6xl text-white/30 group-hover:text-white/50 transition-all">💻</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-dark-plum mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-dusty-mauve/10 text-dusty-mauve rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="text-dusty-mauve hover:text-dark-plum transition-colors">
                      <FaGithub size={20} />
                    </button>
                    <button className="text-dusty-mauve hover:text-dark-plum transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card rounded-2xl max-w-2xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-dark-plum"
              >
                <FaTimes size={24} />
              </button>
              <h3 className="text-2xl font-playfair font-bold text-dark-plum mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 mb-4">{selectedProject.longDescription}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-dark-plum mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-dusty-mauve/10 text-dusty-mauve rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a href={selectedProject.github} className="flex-1 text-center px-4 py-2 bg-dark-plum text-white rounded-lg hover:bg-dusty-mauve transition-colors">
                  View Code
                </a>
                <a href={selectedProject.liveDemo} className="flex-1 text-center px-4 py-2 border-2 border-dusty-mauve text-dusty-mauve rounded-lg hover:bg-dusty-mauve hover:text-white transition-colors">
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;