import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarker, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cream-white to-soft-pink/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-dark-plum to-soft-pink mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-2xl font-playfair text-dark-plum mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-dusty-mauve/5 transition-all">
                  <div className="p-3 rounded-full bg-gradient-to-r from-dark-plum to-dusty-mauve">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-dark-plum font-medium">remotallyzasunshine@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-dusty-mauve/5 transition-all">
                  <div className="p-3 rounded-full bg-gradient-to-r from-dusty-mauve to-soft-pink">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-dark-plum font-medium">09304829421</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-dusty-mauve/5 transition-all">
                  <div className="p-3 rounded-full bg-gradient-to-r from-soft-pink to-dark-plum">
                    <FaMapMarker className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-dark-plum font-medium">Oas Albay, Philippines</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-dusty-mauve/20">
                <h4 className="font-semibold text-dark-plum mb-3">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="p-2 rounded-full bg-dusty-mauve/10 text-dusty-mauve hover:bg-dusty-mauve hover:text-white transition-all">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-dusty-mauve/10 text-dusty-mauve hover:bg-dusty-mauve hover:text-white transition-all">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-dusty-mauve/10 text-dusty-mauve hover:bg-dusty-mauve hover:text-white transition-all">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-dusty-mauve/10 text-dusty-mauve hover:bg-dusty-mauve hover:text-white transition-all">
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-4">
              <div>
                <label className="block text-dark-plum font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-dusty-mauve/20 focus:border-dusty-mauve focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-dark-plum font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-dusty-mauve/20 focus:border-dusty-mauve focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-dark-plum font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-dusty-mauve/20 focus:border-dusty-mauve focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-dark-plum to-dusty-mauve text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 font-semibold"
                >
                  Message sent successfully! 🎉
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;