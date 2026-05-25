import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaCertificate, FaBriefcase } from 'react-icons/fa';

const Journey = () => {
  const timeline = [
    {
      year: '2021',
      title: 'Started Learning Web Development',
      description: 'Began my journey with HTML, CSS, and JavaScript fundamentals.',
      icon: FaCode,
      color: 'from-dark-plum to-dusty-mauve',
    },
    {
      year: '2022',
      title: 'Completed Computer Science Degree',
      description: 'Graduated with honors, specializing in software development.',
      icon: FaGraduationCap,
      color: 'from-dusty-mauve to-soft-pink',
    },
    {
      year: '2023',
      title: 'Professional Certification',
      description: 'Earned Full-Stack Development certification from recognized platform.',
      icon: FaCertificate,
      color: 'from-soft-pink to-dark-plum',
    },
    {
      year: '2024',
      title: 'Freelance Success',
      description: 'Completed 20+ projects for clients worldwide.',
      icon: FaBriefcase,
      color: 'from-dark-plum to-soft-pink',
    },
  ];
  
  return (
    <section id="journey" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-plum to-soft-pink mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            A timeline of my learning path and achievements
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-dark-plum via-dusty-mauve to-soft-pink hidden md:block"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2"></div>
              
              <div className="md:w-1/2 relative">
                <div className="glass-card rounded-2xl p-6 ml-0 md:ml-8 relative">
                  {/* Timeline Dot */}
                  <div className="absolute top-6 -left-12 hidden md:block">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${item.color}`}>
                      <item.icon className="text-white text-xl" />
                    </div>
                    <span className="text-2xl font-playfair font-bold gradient-text">{item.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-dark-plum mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-playfair font-bold text-center text-dark-plum mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <FaCertificate className="text-4xl text-dusty-mauve mx-auto mb-3" />
              <h4 className="font-semibold text-dark-plum">Full-Stack Web Development</h4>
              <p className="text-sm text-gray-500">Certified Professional</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <FaCertificate className="text-4xl text-dusty-mauve mx-auto mb-3" />
              <h4 className="font-semibold text-dark-plum">Advanced JavaScript</h4>
              <p className="text-sm text-gray-500">Expert Certification</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <FaCertificate className="text-4xl text-dusty-mauve mx-auto mb-3" />
              <h4 className="font-semibold text-dark-plum">UI/UX Design Principles</h4>
              <p className="text-sm text-gray-500">Professional Certificate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;