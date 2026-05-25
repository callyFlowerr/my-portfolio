import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
// Palitan ang 'profile.jpg' ng actual filename ng image mo
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Web Developer', 'Laravel Developer', 'Vue.js Developer', 'Problem Solver'];
  
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };
    
    const timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);
  
  const floatingShapes = [
    { top: '20%', left: '10%', delay: 0, size: 'w-16 h-16' },
    { top: '60%', right: '15%', delay: 2, size: 'w-12 h-12' },
    { bottom: '15%', left: '20%', delay: 4, size: 'w-20 h-20' },
    { top: '30%', right: '25%', delay: 1, size: 'w-8 h-8' },
  ];
  
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-white via-soft-pink/20 to-dusty-mauve/10 animate-gradient"></div>
      
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} rounded-full bg-gradient-to-br from-dusty-mauve/20 to-soft-pink/20 backdrop-blur-sm`}
          style={shape}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-dark-plum/5 to-soft-pink/5 blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-dark-plum via-dusty-mauve to-soft-pink p-1 mx-auto">
              <img 
                src={profilePic} 
                alt="Allyza Sunshine"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-4"
          >
            Hello, I'm{' '}
            <span className="gradient-text">
              Allyza Sunshine
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl font-inter text-gray-700 mb-6"
          >
            I'm a{' '}
            <span className="gradient-text font-semibold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg"
          >
            I'm a passionate Full-Stack Developer specializing in Laravel and Vue.js. 
            I build modern, responsive, and high-performance web applications that solve real-world problems.
            Let's bring your ideas to life!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-dark-plum to-dusty-mauve text-white rounded-full font-inter font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 glow-effect"
            >
              Get In Touch
            </button>
            <button className="px-8 py-3 border-2 border-dusty-mauve text-dusty-mauve rounded-full font-inter font-semibold hover:bg-dusty-mauve hover:text-white transition-all duration-300">
              <FaDownload className="inline mr-2" />
              Download Resume
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-6 justify-center mt-12"
          >
            <a href="#" className="text-dusty-mauve hover:text-dark-plum text-2xl transition-all hover:scale-110">
              <FaGithub />
            </a>
            <a href="#" className="text-dusty-mauve hover:text-dark-plum text-2xl transition-all hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="#" className="text-dusty-mauve hover:text-dark-plum text-2xl transition-all hover:scale-110">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;