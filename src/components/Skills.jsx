import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiLaravel, SiVuedotjs, SiTailwindcss, SiJavascript, 
  SiMysql, SiGit, SiGithub, SiPostman 
} from 'react-icons/si';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'Laravel PHP', icon: SiLaravel, level: 85, color: '#FF2D20' },
    { name: 'Vue.js', icon: SiVuedotjs, level: 80, color: '#42b883' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
    { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#F7DF1E' },
    { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479A1' },
    { name: 'Git/GitHub', icon: SiGit, level: 80, color: '#F05032' },
    { name: 'REST APIs', icon: SiPostman, level: 85, color: '#FF6C37' },
    { name: 'Responsive Design', icon: FaCode, level: 90, color: '#ae6a97' },
  ];
  
  const categories = [
    { icon: FaCode, name: 'Frontend', skills: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design'] },
    { icon: FaDatabase, name: 'Backend', skills: ['Laravel PHP', 'MySQL', 'REST APIs'] },
    { icon: FaTools, name: 'Tools & AI', skills: ['Git/GitHub', 'VS Code', 'Postman', 'Figma', 'DeepSeek AI', 'ChatGPT', 'Claude AI'] },
  ];
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-plum to-soft-pink mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card rounded-2xl p-6 text-center group cursor-pointer"
            >
              <skill.icon 
                className="text-5xl mx-auto mb-4 transition-all duration-300 group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <h3 className="font-semibold text-dark-plum mb-3">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-dark-plum to-soft-pink"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <category.icon className="text-4xl text-dusty-mauve mb-4 mx-auto" />
              <h3 className="text-xl font-playfair text-center text-dark-plum mb-4">{category.name}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between p-2 rounded-lg hover:bg-dusty-mauve/10 transition-all">
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-2 h-2 bg-soft-pink rounded-full"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;