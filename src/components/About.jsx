import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaHeart, FaAward, FaUsers } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-cream-white to-soft-pink/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-plum to-soft-pink mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-playfair text-dark-plum">Who Am I?</h3>
            <p className="text-gray-700 leading-relaxed">
             I'm a passionate Full-Stack Developer with a strong eye for design and a deep interest in building seamless digital experiences. 
             I specialize in developing modern web applications enhanced with AI integrations, including OpenAI-powered features and intelligent automation. I enjoy using AI tools to accelerate development, generate efficient solutions, and bring innovative ideas to life through clean, scalable, and creative code. Beyond coding, I’m also a skilled writer who values clear communication, thoughtful content, and user-focused storytelling.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey in web development started with curiosity and has evolved into a commitment
              to building applications that not only function perfectly but also delight users with
              their aesthetics and interactivity.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <FaGraduationCap className="text-dusty-mauve text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-dark-plum">Education</h4>
                  <p className="text-gray-600">B.Sc. in Computer Science</p>
                  <p className="text-gray-500 text-sm">Graduated with Honors</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaCode className="text-dusty-mauve text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-dark-plum">Experience</h4>
                  <p className="text-gray-600">3+ Years of Web Development</p>
                  <p className="text-gray-500 text-sm">Freelance & Professional Projects</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaRocket className="text-dusty-mauve text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold text-dark-plum">Career Goal</h4>
                  <p className="text-gray-600">Become a Leading Full-Stack Developer</p>
                  <p className="text-gray-500 text-sm">Building impactful solutions worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-soft-pink to-dusty-mauve rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-playfair text-dark-plum mb-6">Fun Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-dusty-mauve/5 transition-all">
                    <FaAward className="text-dusty-mauve text-xl" />
                    <div>
                      <p className="font-semibold text-dark-plum">50+ Projects</p>
                      <p className="text-sm text-gray-500">Successfully Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-dusty-mauve/5 transition-all">
                    <FaUsers className="text-dusty-mauve text-xl" />
                    <div>
                      <p className="font-semibold text-dark-plum">20+ Clients</p>
                      <p className="text-sm text-gray-500">Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-dusty-mauve/5 transition-all">
                    <FaHeart className="text-dusty-mauve text-xl" />
                    <div>
                      <p className="font-semibold text-dark-plum">100% Dedication</p>
                      <p className="text-sm text-gray-500">To Every Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;