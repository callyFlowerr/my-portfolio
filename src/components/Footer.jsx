import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-r from-dark-plum to-dusty-mauve text-white py-8 relative">
      <div className="container mx-auto px-6 text-center">
        <p className="font-inter mb-2">
          © 2026 Allyza Sunshine Remot. All rights reserved.
        </p>
       
      </div>
      
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-cream-white text-dark-plum rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;